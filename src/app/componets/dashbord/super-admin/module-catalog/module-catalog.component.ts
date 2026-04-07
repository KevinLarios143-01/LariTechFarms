import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/common/sharedmodule';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SuperAdminService } from '../../../../shared/services/super-admin.service';

@Component({
  selector: 'app-module-catalog',
  standalone: true,
  imports: [SharedModule, RouterModule, FormsModule],
  templateUrl: './module-catalog.component.html',
  styleUrls: ['./module-catalog.component.scss']
})
export class ModuleCatalogComponent implements OnInit {
  modules: any[] = [];
  loading = false;
  editingModule: any = null;
  moduleName = '';
  moduleDescription = '';

  constructor(
    private superAdminService: SuperAdminService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.loading = true;
    this.superAdminService.getModuleCatalog().subscribe({
      next: (response) => {
        this.modules = response.data || [];
        this.loading = false;
      },
      error: (error) => {
        this.toastr.error('Error al cargar los módulos', 'Error');
        console.error(error);
        this.loading = false;
      }
    });
  }

  openCreateModal(template: any): void {
    this.editingModule = null;
    this.moduleName = '';
    this.moduleDescription = '';
    this.modalService.open(template, { windowClass: 'modalCusSty' });
  }

  openEditModal(template: any, module: any): void {
    this.editingModule = module;
    this.moduleName = module.name;
    this.moduleDescription = module.description || '';
    this.modalService.open(template, { windowClass: 'modalCusSty' });
  }

  saveModule(modal: any): void {
    if (!this.moduleName.trim()) {
      this.toastr.error('El nombre del módulo es obligatorio', 'Error');
      return;
    }

    const data = {
      name: this.moduleName.trim(),
      description: this.moduleDescription.trim() || undefined
    };

    if (this.editingModule) {
      this.superAdminService.updateModuleCatalog(this.editingModule.id_module, data).subscribe({
        next: () => {
          this.toastr.success('Módulo actualizado correctamente', 'Éxito');
          modal.dismiss();
          this.loadModules();
        },
        error: (error) => {
          this.toastr.error('Error al actualizar el módulo', 'Error');
          console.error(error);
        }
      });
    } else {
      this.superAdminService.createModuleCatalog(data).subscribe({
        next: () => {
          this.toastr.success('Módulo creado correctamente', 'Éxito');
          modal.dismiss();
          this.loadModules();
        },
        error: (error) => {
          this.toastr.error('Error al crear el módulo', 'Error');
          console.error(error);
        }
      });
    }
  }

  toggleStatus(module: any): void {
    const newStatus = !module.is_active;
    this.superAdminService.toggleModuleCatalogStatus(module.id_module, newStatus).subscribe({
      next: () => {
        module.is_active = newStatus;
        this.toastr.success('Estado del módulo actualizado correctamente', 'Éxito');
      },
      error: (error) => {
        this.toastr.error('Error al actualizar el estado del módulo', 'Error');
        console.error(error);
      }
    });
  }

  confirmDelete(module: any): void {
    if (confirm(`¿Está seguro de que desea eliminar el módulo "${module.name}"?`)) {
      this.superAdminService.deleteModuleCatalog(module.id_module).subscribe({
        next: () => {
          this.toastr.success('Módulo eliminado correctamente', 'Éxito');
          this.loadModules();
        },
        error: (error) => {
          if (error.status === 409) {
            this.toastr.error('No se puede eliminar el módulo porque está asignado a uno o más tenants', 'Error');
          } else {
            this.toastr.error('Error al eliminar el módulo', 'Error');
          }
          console.error(error);
        }
      });
    }
  }
}
