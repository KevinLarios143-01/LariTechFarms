import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { SuperAdminService } from '../../../../shared/services/super-admin.service';

interface Module {
  id: number;
  name: string;
  isEnabled: boolean;
}

interface TenantModules {
  tenantId: number;
  tenantName: string;
  modules: Module[];
}

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [SharedModule, RouterModule, NgSelectModule, FormsModule],
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  tenants: any[] = [];
  selectedTenantId: number | null = null;
  modules: any[] = [];
  loading = false;

  constructor(
    private superAdminService: SuperAdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadTenants();
  }

  loadTenants(): void {
    this.superAdminService.getCompanies().subscribe({
      next: (companies) => {
        this.tenants = companies;
      },
      error: (error) => {
        this.toastr.error('Error al cargar las empresas', 'Error');
        console.error(error);
      }
    });
  }

  onTenantChange(tenantId: number): void {
    this.selectedTenantId = tenantId;
    this.loadModules(tenantId);
  }

  loadModules(tenantId: number): void {
    this.loading = true;
    this.superAdminService.getEnabledModules(tenantId).subscribe({
      next: (response) => {
        if (response.ok) {
          this.modules = response.modules;
        }
        this.loading = false;
      },
      error: (error) => {
        this.toastr.error('Error al cargar los módulos', 'Error');
        console.error(error);
        this.loading = false;
      }
    });
  }

  toggleModule(moduleId: number, currentStatus: boolean): void {
    if (!this.selectedTenantId) return;

    const newStatus = !currentStatus;
    
    // Actualizar localmente primero
    const module = this.modules.find(m => m.id === moduleId);
    if (module) {
      module.isEnabled = newStatus;
    }

    this.superAdminService.updateModuleStatus(this.selectedTenantId, moduleId, newStatus).subscribe({
      next: (response) => {
        if (response.ok) {
          this.toastr.success(response.message, 'Éxito');
        }
      },
      error: (error) => {
        // Revertir el cambio si hay error
        if (module) {
          module.isEnabled = currentStatus;
        }
        this.toastr.error('Error al actualizar el módulo', 'Error');
        console.error(error);
      }
    });
  }
}
