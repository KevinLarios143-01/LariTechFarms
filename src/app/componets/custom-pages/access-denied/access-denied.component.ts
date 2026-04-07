import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/common/sharedmodule';
import { PermissionsService } from '../../../shared/services/permissions.service';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent {
  constructor(
    private permissionsService: PermissionsService,
    private router: Router
  ) {}

  goHome(): void {
    const redirect = this.permissionsService.getDefaultRedirect();
    this.router.navigate([redirect]);
  }
}
