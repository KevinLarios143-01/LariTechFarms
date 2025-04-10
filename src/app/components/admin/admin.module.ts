import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { ApiSettingsComponent } from './api-settings/api-settings.component';
import { RoleAccessComponent } from './role-access/role-access.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    GeneralSettingsComponent,
    ApiSettingsComponent,
    RoleAccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
