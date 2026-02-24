import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';

@Component({
  selector: 'app-tickets-report',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  template: `<div class="container-fluid"><div class="card"><div class="card-body"><h3>Reporte de Tickets</h3><p>En desarrollo...</p></div></div></div>`,
  styles: []
})
export class TicketsReportComponent {}
