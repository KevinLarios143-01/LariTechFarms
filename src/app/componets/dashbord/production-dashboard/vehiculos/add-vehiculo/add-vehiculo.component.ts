import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { VehiculoService } from '../../../../../shared/services/vehiculo.service';
import { CreateVehiculoDTO, UpdateVehiculoDTO } from '../../../../../shared/interfaces/vehiculo';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-add-vehiculo',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgSelectModule, SharedModule],
  templateUrl: './add-vehiculo.component.html',
  styleUrls: ['./add-vehiculo.component.scss']
})
export class AddVehiculoComponent implements OnInit {
  vehiculoForm: FormGroup;
  tipos: string[] = [];
  isLoading = false;
  isEditMode = false;
  vehiculoId: number | null = null;

  estados = ['Activo', 'Inactivo', 'Mantenimiento', 'Vendido'];

  constructor(
    private fb: FormBuilder,
    private vehiculoService: VehiculoService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.vehiculoForm = this.fb.group({
      tipo: ['', Validators.required],
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.min(1900)],
      estado: ['Activo'],
      capacidad: ['', Validators.min(0)],
      fechaAdquisicion: ['']
    });
  }

  ngOnInit() {
    this.loadTipos();
    this.checkEditMode();
  }

  checkEditMode() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.vehiculoId = parseInt(id);
      this.loadVehiculo();
    }
  }

  loadTipos() {
    this.vehiculoService.getTipos().subscribe({
      next: (response) => {
        this.tipos = response.data || [];
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar tipos:', error);
      }
    });
  }

  loadVehiculo() {
    if (this.vehiculoId) {
      this.isLoading = true;
      this.vehiculoService.getVehiculoById(this.vehiculoId).subscribe({
        next: (response) => {
          const vehiculo = response.data;
          this.vehiculoForm.patchValue({
            tipo: vehiculo.tipo,
            placa: vehiculo.placa,
            marca: vehiculo.marca,
            modelo: vehiculo.modelo,
            anio: vehiculo.anio || '',
            estado: vehiculo.estado,
            capacidad: vehiculo.capacidad || '',
            fechaAdquisicion: vehiculo.fechaAdquisicion || ''
          });
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          this.toastr.error('Error al cargar vehículo', 'Error');
          this.isLoading = false;
          this.router.navigate(['../list'], { relativeTo: this.route });
        }
      });
    }
  }

  onSubmit() {
    if (this.vehiculoForm.valid) {
      this.isLoading = true;
      const formData = this.vehiculoForm.value;

      if (this.isEditMode && this.vehiculoId) {
        const updateData: UpdateVehiculoDTO = {
          tipo: formData.tipo,
          placa: formData.placa,
          marca: formData.marca,
          modelo: formData.modelo,
          anio: formData.anio ? parseInt(formData.anio) : undefined,
          estado: formData.estado,
          capacidad: formData.capacidad ? parseFloat(formData.capacidad) : undefined,
          fechaAdquisicion: formData.fechaAdquisicion || undefined
        };

        this.vehiculoService.updateVehiculo(this.vehiculoId, updateData).subscribe({
          next: () => {
            this.toastr.success('Vehículo actualizado exitosamente', 'Éxito');
            setTimeout(() => {
              this.router.navigate(['../../list'], { relativeTo: this.route });
            }, 1000);
          },
          error: (error) => {
            const errorMsg = error?.error?.message || 'Error al actualizar vehículo';
            this.toastr.error(errorMsg, 'Error');
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      } else {
        const createData: CreateVehiculoDTO = {
          tipo: formData.tipo,
          placa: formData.placa,
          marca: formData.marca,
          modelo: formData.modelo,
          anio: formData.anio ? parseInt(formData.anio) : undefined,
          estado: formData.estado,
          capacidad: formData.capacidad ? parseFloat(formData.capacidad) : undefined,
          fechaAdquisicion: formData.fechaAdquisicion || undefined
        };

        this.vehiculoService.createVehiculo(createData).subscribe({
          next: () => {
            this.toastr.success('Vehículo creado exitosamente', 'Éxito');
            setTimeout(() => {
              this.router.navigate(['../list'], { relativeTo: this.route });
            }, 1000);
          },
          error: (error) => {
            const errorMsg = error?.error?.message || 'Error al crear vehículo';
            this.toastr.error(errorMsg, 'Error');
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor complete todos los campos requeridos', 'Advertencia');
    }
  }

  markFormGroupTouched() {
    Object.keys(this.vehiculoForm.controls).forEach(key => {
      const control = this.vehiculoForm.get(key);
      control?.markAsTouched();
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.vehiculoForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.vehiculoForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return `${fieldName} es requerido`;
      if (field.errors['min']) return `${fieldName} debe ser mayor o igual a ${field.errors['min'].min}`;
    }
    return '';
  }
}
