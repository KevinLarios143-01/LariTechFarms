import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgSelectModule } from '@ng-select/ng-select';
import { VentaService } from '../../../../shared/services/venta.service';
import { CreateVentaRequest, UpdateVentaRequest } from '../../../../shared/interfaces/venta';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Cliente } from '../../../../shared/interfaces/cliente';
import { ClienteService } from '../../client-dashboard/cliente.service';

@Component({
  selector: 'app-new-sell',
  standalone: true,
  imports: [SharedModule, NgSelectModule, ReactiveFormsModule, DatePipe],
  templateUrl: './new-sell.component.html',
  styleUrls: ['./new-sell.component.scss']
})
export class NewSellComponent implements OnInit {
  ventaForm: FormGroup;
  loading = false;
  isEditing = false;
  ventaId: number | null = null;
  clientes: Cliente[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly ventaService: VentaService,
    private readonly clienteService: ClienteService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toastr: ToastrService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.ventaForm = this.fb.group({
      idCliente: ['', [Validators.required, Validators.min(1)]],
      fecha: ['', Validators.required],
      total: ['', [Validators.required, Validators.min(0)]],
      metodoPago: [''],
      estado: ['Pendiente', Validators.required],
      observaciones: ['']
    });
  }

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.ventaForm.patchValue({ fecha: today });

    this.route.queryParams.subscribe(params => {
      if (params['id'] && params['mode'] === 'edit') {
        this.isEditing = true;
        this.ventaId = +params['id'];
        this.loadVenta();
      }
    });

    this.loadClientes();
  }

  private loadVenta(): void {
    if (this.ventaId) {
      this.loading = true;
      this.ventaService.getVentaById(this.ventaId).subscribe({
        next: (response) => {
          const venta = response.data;
          this.ventaForm.patchValue({
            idCliente: venta.idCliente,
            fecha: this.formatDateForInput(venta.fecha),
            total: venta.total,
            metodoPago: venta.metodoPago,
            estado: venta.estado,
            observaciones: venta.observaciones
          });
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Error loading venta:', error);
          this.toastr.error('Error al cargar la venta', 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            progressBar: true,
            closeButton: true
          });
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    }
  }

  onSubmit(): void {
    if (this.ventaForm.valid) {
      this.loading = true;
      const formData = this.ventaForm.value;

      if (this.isEditing && this.ventaId) {
        this.ventaService.updateVenta(this.ventaId, formData as UpdateVentaRequest).subscribe({
          next: () => {
            this.toastr.success('Venta actualizada exitosamente', 'Éxito', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
              progressBar: true,
              closeButton: true
            });
            this.router.navigate(['/dashboard/business-dashboard/sell-list']);
            this.loading = false;
          },
          error: (error) => {
            this.toastr.error('Error al actualizar la venta: ' + (error.error?.message || 'Error desconocido'), 'Error', {
              timeOut: 5000,
              positionClass: 'toast-top-right',
              progressBar: true,
              closeButton: true
            });
            this.loading = false;
          }
        });
      } else {
        this.ventaService.createVenta(formData as CreateVentaRequest).subscribe({
          next: () => {
            this.toastr.success('Venta creada exitosamente', 'Éxito', {
              timeOut: 3000,
              positionClass: 'toast-top-right',
              progressBar: true,
              closeButton: true
            });
            this.router.navigate(['/dashboard/business-dashboard/sell-list']);
            this.loading = false;
          },
          error: (error) => {
            this.toastr.error('Error al crear la venta: ' + (error.error?.message || 'Error desconocido'), 'Error', {
              timeOut: 5000,
              positionClass: 'toast-top-right',
              progressBar: true,
              closeButton: true
            });
            this.loading = false;
          }
        });
      }
    } else {
      this.markFormGroupTouched();
      this.toastr.warning('Por favor, complete todos los campos requeridos', 'Advertencia', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        progressBar: true,
        closeButton: true
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/dashboard/business-dashboard/sell-list']);
  }

  private formatDateForInput(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  private loadClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (response: any) => {
        const clientesData = response?.data?.data || response?.data || response || [];
        this.clientes = Array.isArray(clientesData) ? clientesData : [];
      },
      error: (error: any) => {
        console.error('Error loading clientes:', error);
        this.clientes = [];
      }
    });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.ventaForm.controls).forEach(key => {
      const control = this.ventaForm.get(key);
      control?.markAsTouched();
    });
  }
}