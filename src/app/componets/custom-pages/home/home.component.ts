import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { PermissionsService } from '../../../shared/services/permissions.service';
import { MODULE_ROUTE_MAP, ModuleName } from '../../../shared/services/permissions.config';

interface AccessibleModule {
  name: ModuleName;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  accessibleModules: AccessibleModule[] = [];

  constructor(
    private permissionsService: PermissionsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.accessibleModules = this.getAccessibleModules();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  private getAccessibleModules(): AccessibleModule[] {
    const modules: AccessibleModule[] = [];

    for (const [moduleName, prefixes] of Object.entries(MODULE_ROUTE_MAP)) {
      const mod = moduleName as ModuleName;
      if (this.permissionsService.isModuleEnabled(mod)) {
        for (const prefix of prefixes) {
          if (this.permissionsService.hasRouteAccess(prefix)) {
            modules.push({ name: mod, route: prefix });
            break;
          }
        }
      }
    }

    return modules;
  }
}
