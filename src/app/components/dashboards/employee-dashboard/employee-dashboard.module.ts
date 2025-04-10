import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ApplyLeavesComponent } from './apply-leaves/apply-leaves.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { PayslipsComponent } from './payslips/payslips.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    AttendanceComponent,
    ApplyLeavesComponent,
    MyLeavesComponent,
    PayslipsComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule, FormsModule,
    NgbModule,
    NgSelectModule,
    MatFormFieldModule, MatPaginatorModule, MatTableModule, MatInputModule, MatSortModule,
    NgChartsModule, NgApexchartsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmployeeDashboardModule { }
