import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HuevosService } from '../services/huevos.service';
import { LotesService } from '../../../bussiness-dashboard/lotes/services/lotes.service';
import { CreateControlHuevosDTO, UpdateControlHuevosDTO } from '../interfaces/huevo.interface';
import { Lote } from '../../../bussiness-dashboard/lotes/interfaces/lote.interface';

@Component({
  selector: 'app-new-huevo',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, RouterModule, ReactiveFormsModule],
  templateUrl: './new-huevo.component.html',
  styleUrls: ['./new-huevo.component.scss']
})
export class NewHuevoComponent implements OnInit {
  controlForm: FormGroup;
  loading = false;
  isEditing = false;
  controlId: number | null = null;
  lotes: Lote[] = [];
  calidades = ['Excelente', 'Buena', 'Regular', 'Mala'];

  constructor(
    private fb: FormBuilder,
    private huevosService: HuevosService,
    private lotesService: LotesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.controlForm = this.fb.group({
      idLote: ['', Validators.required],
      fecha: ['', Validators.required],
      cantidadHuevos: ['', [Validators.required, Validators.min(1)]],
      calidad: ['']
    });
  }

  ngOnInit(): void {
    this.loadLotes();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditing = true;
        this.controlId = +params['id'];
        this.loadControl();
      }
    });
  }

  loadLotes(): void {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        let allLotes: Lote[] = [];
        if (response?.data?.data && Array.isArray(response.data.data)) {
          allLotes = response.data.data;
        } else if (response?.data?.items && Array.isArray(response.data.items)) {
          allLotes = response.data.items;
        } else if (response?.data && Array.isArray(response.data)) {
          allLotes = response.data;
        } else if (Array.isArray(response)) {
          allLotes = response;
        }
        this.lotes = allLotes.filter((lote: Lote) => lote.tipo === 'Ponedoras' && lote.estado === 'Activo');
      },
      error: (error) => {
        console.error('Error al cargar lotes:', error);
      }
    });
  }

  loadControl(): void {
    if (this.controlId) {
      this.loading = true;
      this.huevosService.getControlById(this.controlId).subscribe({
        next: (response) => {
          const control = response.data;
          this.controlForm.patchValue({
            idLote: control.idLote,
            fecha: control.fecha.split('T')[0],
            cantidadHuevos: control.cantidadHuevos,
            calidad: control.calidad
          });
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al cargar control:', error);
          this.toastr.error('Error al cargar el control', 'Error');
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.controlForm.valid) {
      this.loading = true;
      const formData = this.controlForm.value;

      if (this.isEditing && this.controlId) {
        const updateData: UpdateControlHuevosDTO = {
          cantidadHuevos: formData.cantidadHuevos,
          calidad: formData.calidad
        };
        
        this.huevosService.updateControl(this.controlId, updateData).subscribe({
          next: () => {
            this.toastr.success('Control actualizado exitosamente', 'Éxito');
            this.router.navigate(['/dashboard/production-dashboard/huevos']);
            this.loading = false;
          },
          error: (error) => {
            console.error('Error al actualizar control:', error);
            this.toastr.error('Error al actualizar el control', 'Error');
            this.loading = false;
          }
        });
      } else {
        const createData: CreateControlHuevosDTO = formData;
        
        this.huevosService.createControl(createData).subscribe({
          next: () => {
            this.toastr.success('Control creado exitosamente', 'Éxito');
            this.router.navigate(['/dashboard/production-dashboard/huevos']);
            this.loading = false;
          },
          error: (error) => {
            console.error('Error al crear control:', error);
            this.toastr.error('Error al crear el control', 'Error');
            this.loading = false;
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia');
    }
  }

  onCancel(): void {
    this.router.navigate(['/dashboard/production-dashboard/huevos']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.controlForm.controls).forEach(key => {
      const control = this.controlForm.get(key);
      control?.markAsTouched();
    });
  }
}