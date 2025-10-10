import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/common/sharedmodule';
import { LotesService } from '../services/lotes.service';
import { Lote } from '../interfaces/lote.interface';

@Component({
  selector: 'app-view-lote',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './view-lote.component.html',
  styleUrls: ['./view-lote.component.scss']
})
export class ViewLoteComponent implements OnInit {
  lote: Lote | null = null;
  loading = false;
  loteId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lotesService: LotesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loteId = +params['id'];
      if (this.loteId) {
        this.loadLote();
      }
    });
  }

  loadLote(): void {
    this.loading = true;
    
    this.lotesService.getLoteById(this.loteId).subscribe({
      next: (response) => {
        this.lote = response.data || response;
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
    this.router.navigate(['/dashboard/business-dashboard/lotes']);
  }

  editLote(): void {
    this.router.navigate(['/dashboard/business-dashboard/lotes/edit-lote', this.loteId]);
  }

  getEstadoBadgeClass(estado: string): string {
    switch (estado) {
      case 'Activo': return 'bg-success';
      case 'Inactivo': return 'bg-warning';
      case 'Desalojado': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }
}