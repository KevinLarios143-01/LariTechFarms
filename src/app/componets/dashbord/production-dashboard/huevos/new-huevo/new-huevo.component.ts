import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HuevosService } from '../services/huevos.service';
import { LotesService } from '../../../bussiness-dashboard/lotes/services/lotes.service';
import { ControlHuevos, CreateControlHuevosDTO, UpdateControlHuevosDTO } from '../interfaces/huevo.interface';
import { Lote } from '../../../bussiness-dashboard/lotes/interfaces/lote.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-new-huevo',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, NgbModule, SharedModule],
  templateUrl: './new-huevo.component.html',
  styleUrls: ['./new-huevo.component.scss']
})
export class NewHuevoComponent implements OnInit {
  controlForm: FormGroup
  lotes: Lote[] = []
  calidades = ['Excelente', 'Buena', 'Regular', 'Mala']
  isLoading = false
  isEditMode = false
  controlId: number | null = null
  active = 1

  constructor(
    private fb: FormBuilder,
    private huevosService: HuevosService,
    private lotesService: LotesService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.controlForm = this.fb.group({
      idLote: ['', Validators.required],
      fecha: ['', Validators.required],
      cantidadHuevos: ['', [Validators.required, Validators.min(1)]],
      calidad: ['']
    })
  }

  ngOnInit() {
    this.loadLotes()
    this.checkEditMode()
  }

  checkEditMode() {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.isEditMode = true
      this.controlId = parseInt(id)
      this.loadControl()
    } else {
      // Set today's date as default
      const today = new Date().toISOString().split('T')[0]
      this.controlForm.patchValue({ fecha: today })
    }
  }

  loadLotes() {
    this.lotesService.getLotes().subscribe({
      next: (response) => {
        this.lotes = response.data.data.filter((lote: any) => lote.tipo === 'Ponedoras' && lote.estado === 'Activo')
        this.cdr.detectChanges()
      },
      error: (error) => {
        this.toastr.error('Error al cargar lotes', 'Error', {
          progressBar: true,
          closeButton: true
        })
      }
    })
  }

  loadControl() {
    if (this.controlId) {
      this.isLoading = true
      this.huevosService.getControlById(this.controlId).subscribe({
        next: (response) => {
          const control = response.data
          this.controlForm.patchValue({
            idLote: control.idLote,
            fecha: this.formatDateForInput(control.fecha),
            cantidadHuevos: control.cantidadHuevos,
            calidad: control.calidad || ''
          })
          this.isLoading = false
          this.cdr.detectChanges()
        },
        error: (error) => {
          this.toastr.error('Error al cargar control', 'Error', {
            progressBar: true,
            closeButton: true
          })
          this.isLoading = false
          this.router.navigate(['../list'], { relativeTo: this.route })
        }
      })
    }
  }

  onSubmit() {
    if (this.controlForm.valid) {
      this.isLoading = true
      const formData = this.controlForm.value

      if (this.isEditMode && this.controlId) {
        const updateData: UpdateControlHuevosDTO = {
          cantidadHuevos: formData.cantidadHuevos,
          calidad: formData.calidad || undefined
        }

        this.huevosService.updateControl(this.controlId, updateData).subscribe({
          next: (response) => {
            this.toastr.success('Control actualizado exitosamente', 'Éxito', {
              progressBar: true,
              closeButton: true
            })
            this.router.navigate(['../list'], { relativeTo: this.route })
          },
          error: (error) => {
            this.toastr.error('Error al actualizar control', 'Error', {
              progressBar: true,
              closeButton: true
            })
            this.isLoading = false
            this.cdr.detectChanges()
          }
        })
      } else {
        const createData: CreateControlHuevosDTO = {
          idLote: parseInt(formData.idLote),
          fecha: formData.fecha,
          cantidadHuevos: formData.cantidadHuevos,
          calidad: formData.calidad || undefined
        }

        this.huevosService.createControl(createData).subscribe({
          next: (response) => {
            this.toastr.success('Control creado exitosamente', 'Éxito', {
              progressBar: true,
              closeButton: true
            })
            this.router.navigate(['../list'], { relativeTo: this.route })
          },
          error: (error) => {
            this.toastr.error('Error al crear control', 'Error', {
              progressBar: true,
              closeButton: true
            })
            this.isLoading = false
            this.cdr.detectChanges()
          }
        })
      }
    } else {
      this.markFormGroupTouched()
    }
  }

  markFormGroupTouched() {
    Object.keys(this.controlForm.controls).forEach(key => {
      const control = this.controlForm.get(key)
      control?.markAsTouched()
    })
  }

  formatDateForInput(dateString: string): string {
    if (!dateString) return ''
    const date = new Date(dateString + 'T00:00:00.000Z')
    return date.toISOString().split('T')[0]
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.controlForm.get(fieldName)
    return !!(field && field.invalid && (field.dirty || field.touched))
  }

  getFieldError(fieldName: string): string {
    const field = this.controlForm.get(fieldName)
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`
      if (field.errors['min']) return `${fieldName} debe ser mayor a 0`
    }
    return ''
  }

  getLoteNombre(): string {
    const loteId = this.controlForm.get('idLote')?.value
    if (!loteId) return ''
    const lote = this.lotes.find(l => l.id == loteId)
    return lote ? `${lote.galera} - ${lote.tipo}` : ''
  }
}