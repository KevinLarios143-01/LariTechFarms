import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { HuevosService } from '../services/huevos.service';
import { ControlHuevos } from '../interfaces/huevo.interface';

@Component({
  selector: 'app-view-huevo',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './view-huevo.component.html',
  styleUrls: ['./view-huevo.component.scss']
})
export class ViewHuevoComponent implements OnInit {
  control: ControlHuevos | null = null;
  loading = false;
  controlId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private huevosService: HuevosService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.controlId = +params['id'];
      if (this.controlId) {
        this.loadControl();
      }
    });
  }

  loadControl(): void {
    this.loading = true;
    this.huevosService.getControlById(this.controlId).subscribe({
      next: (response) => {
        this.control = response.data || response;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard/production-dashboard/huevos']);
  }

  editControl(): void {
    this.router.navigate(['/dashboard/production-dashboard/huevos/edit', this.controlId]);
  }

  getCalidadBadgeClass(calidad?: string): string {
    switch (calidad) {
      case 'Excelente': return 'bg-success';
      case 'Buena': return 'bg-info';
      case 'Regular': return 'bg-warning';
      case 'Mala': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }
}