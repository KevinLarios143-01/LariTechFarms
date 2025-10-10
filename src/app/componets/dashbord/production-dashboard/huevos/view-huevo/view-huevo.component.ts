import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HuevosService } from '../services/huevos.service';
import { ControlHuevos } from '../interfaces/huevo.interface';
import { SharedModule } from '../../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-view-huevo',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbModule, SharedModule],
  templateUrl: './view-huevo.component.html',
  styleUrls: ['./view-huevo.component.scss']
})
export class ViewHuevoComponent implements OnInit {
  control: ControlHuevos | null = null
  isLoading = false
  controlId: number
  active = 1

  constructor(
    private huevosService: HuevosService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {
    this.controlId = parseInt(this.route.snapshot.paramMap.get('id') || '0')
  }

  ngOnInit() {
    this.loadControl()
  }

  loadControl() {
    this.isLoading = true
    this.huevosService.getControlById(this.controlId).subscribe({
      next: (response) => {
        this.control = response.data
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

  deleteControl() {
    if (confirm('¿Está seguro de eliminar este control?')) {
      this.huevosService.deleteControl(this.controlId).subscribe({
        next: () => {
          this.toastr.success('Control eliminado exitosamente', 'Éxito', {
            progressBar: true,
            closeButton: true
          })
          this.router.navigate(['../list'], { relativeTo: this.route })
        },
        error: () => {
          this.toastr.error('Error al eliminar control', 'Error', {
            progressBar: true,
            closeButton: true
          })
        }
      })
    }
  }

  getCalidadClass(calidad?: string): string {
    switch(calidad) {
      case 'Excelente': return 'text-success'
      case 'Buena': return 'text-info'
      case 'Regular': return 'text-warning'
      case 'Mala': return 'text-danger'
      default: return 'text-muted'
    }
  }

  getCalidadBadgeClass(calidad?: string): string {
    switch(calidad) {
      case 'Excelente': return 'badge bg-success'
      case 'Buena': return 'badge bg-info'
      case 'Regular': return 'badge bg-warning'
      case 'Mala': return 'badge bg-danger'
      default: return 'badge bg-secondary'
    }
  }
}