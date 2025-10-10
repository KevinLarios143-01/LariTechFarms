import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LotesService } from '../services/lotes.service';
import { CreateLoteDTO, UpdateLoteDTO } from '../interfaces/lote.interface';

@Component({
  selector: 'app-new-lote',
  standalone: true,
  imports: [CommonModule, SharedModule, NgSelectModule, RouterModule, ReactiveFormsModule],
  templateUrl: './new-lote.component.html',
  styleUrls: ['./new-lote.component.scss']
})
export class NewLoteComponent implements OnInit {
  loteForm: FormGroup;
  loading = false;
  isEditing = false;
  loteId: number | null = null;

  tiposLote = ['Ponedoras', 'Engorde'];
  estadosLote = ['Activo', 'Inactivo', 'Desalojado'];

  constructor(
    private fb: FormBuilder,
    private lotesService: LotesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.loteForm = this.fb.group({
      tipo: ['', Validators.required],
      galera: ['', Validators.required],
      cantidad: ['', [Validators.required, Validators.min(1)]],
      fechaInicio: ['', Validators.required],
      fechaFin: [''],
      estado: ['Activo'],
      observaciones: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditing = true;
        this.loteId = +params['id'];
        this.loadLote();
      }
    });
  }

  loadLote(): void {
    if (this.loteId) {
      this.loading = true;
      this.lotesService.getLoteById(this.loteId).subscribe({
        next: (response) => {
          const lote = response.data;
          this.loteForm.patchValue({
            tipo: lote.tipo,
            galera: lote.galera,
            cantidad: lote.cantidad,
            fechaInicio: lote.fechaInicio,
            fechaFin: lote.fechaFin,
            estado: lote.estado,
            observaciones: lote.observaciones
          });
          this.loading = false;
        },
        error: (error) => {
          console.error('Error al cargar lote:', error);
          this.toastr.error('Error al cargar el lote', 'Error');
          this.loading = false;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.loteForm.valid) {
      this.loading = true;
      const formData = this.loteForm.value;

      if (this.isEditing && this.loteId) {
        this.lotesService.updateLote(this.loteId, formData as UpdateLoteDTO).subscribe({
          next: () => {
            this.toastr.success('Lote actualizado exitosamente', 'Éxito');
            this.router.navigate(['/dashboard/business-dashboard/lotes']);
            this.loading = false;
          },
          error: (error) => {
            console.error('Error al actualizar lote:', error);
            this.toastr.error('Error al actualizar el lote', 'Error');
            this.loading = false;
          }
        });
      } else {
        this.lotesService.createLote(formData as CreateLoteDTO).subscribe({
          next: () => {
            this.toastr.success('Lote creado exitosamente', 'Éxito');
            this.router.navigate(['/dashboard/business-dashboard/lotes']);
            this.loading = false;
          },
          error: (error) => {
            console.error('Error al crear lote:', error);
            this.toastr.error('Error al crear el lote', 'Error');
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
    this.router.navigate(['/dashboard/business-dashboard/lotes']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.loteForm.controls).forEach(key => {
      const control = this.loteForm.get(key);
      control?.markAsTouched();
    });
  }
}