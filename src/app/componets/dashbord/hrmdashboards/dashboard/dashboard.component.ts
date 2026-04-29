import { Component, OnInit, ChangeDetectorRef, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { PermissionsService } from '../../../../shared/services/permissions.service';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { AdminAttendanceComponent } from './admin-attendance/admin-attendance.component';

interface DashboardData {
  cards: {
    totalEmpleados: number;
    empleadosActivos: number;
    ventasMes: number;
    ventasMontoMes: number;
    produccionHuevosMes: number;
    gastosMes: number;
    ventasPendientes: number;
  };
  empleados: { total: number; activos: number; hombres: number; mujeres: number; nuevos: number };
  galeras: { total: number; activas: number };
  clientes: { total: number; activos: number };
  vehiculos: { total: number; activos: number };
  ticketsPendientes: any[];
  ventasMensuales: { mes: string; cantidad: number; monto: number }[];
  ultimosEmpleados: any[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, NgbModule, RouterModule, CommonModule, DatePipe, DecimalPipe, PersonalDashboardComponent, AdminAttendanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly permissionsService = inject(PermissionsService);
  private apiUrl = `${environment.apiUrl}/v1`;

  isAdmin = false;
  data: DashboardData | null = null;
  isLoading = true;
  currentDate = '';
  currentTime = '';

  // Charts
  ventasChartOptions: any = {};
  generoChartOptions: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const role = this.permissionsService.getUserRole();
    this.isAdmin = role === 'superadmin' || role === 'admin';

    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000);

    if (this.isAdmin) {
      this.loadDashboard();
    }
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
    this.currentTime = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  loadDashboard(): void {
    this.isLoading = true;
    this.http.get<any>(`${this.apiUrl}/dashboard/superadmin`).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.data = res?.data || null;
        if (this.data) {
          this.buildVentasChart();
          this.buildGeneroChart();
        }
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  buildVentasChart(): void {
    const meses = this.data?.ventasMensuales || [];
    const labels = meses.map(m => {
      const [y, mo] = m.mes.split('-');
      const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      return monthNames[parseInt(mo) - 1] || m.mes;
    });

    this.ventasChartOptions = {
      series: [
        { name: 'Monto (Q)', data: meses.map(m => m.monto) },
        { name: 'Cantidad', data: meses.map(m => m.cantidad) }
      ],
      chart: { height: 325, type: 'line', zoom: { enabled: false }, toolbar: { show: false },
        dropShadow: { enabled: true, top: 5, left: 0, blur: 3, color: '#000', opacity: 0.1 }
      },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'top' },
      stroke: { curve: 'smooth', width: 3, dashArray: [0, 5] },
      grid: { borderColor: '#f2f6f7' },
      colors: ['var(--primary-color)', 'rgba(var(--primary-rgb), 0.3)'],
      yaxis: { title: { text: '' } },
      xaxis: { categories: labels }
    };
  }

  buildGeneroChart(): void {
    const h = this.data?.empleados.hombres || 0;
    const m = this.data?.empleados.mujeres || 0;

    this.generoChartOptions = {
      series: [h, m],
      labels: ['Hombres', 'Mujeres'],
      chart: { height: 280, type: 'donut', toolbar: { show: false } },
      dataLabels: { enabled: false },
      legend: { show: true, position: 'bottom', fontSize: '14px' },
      stroke: { show: true, colors: ['#fff'], width: 0 },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '75%',
            labels: {
              show: true,
              name: { show: true, fontSize: '18px', offsetY: -10 },
              value: { show: true, fontSize: '28px', fontWeight: 500, offsetY: 5 },
              total: { show: true, label: 'Total', fontSize: '16px' }
            }
          }
        }
      },
      colors: ['var(--primary-color)', 'rgba(254, 127, 0, 1)']
    };
  }

  getTicketProductos(ticket: any): string {
    if (!ticket.detalles?.length) return '-';
    return ticket.detalles.map((d: any) => `${d.producto?.nombre || ''} x${d.cantidad}`).join(', ');
  }
}
