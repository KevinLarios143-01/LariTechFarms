import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { hrmdashboardRoutingModule } from '../../../app/componets/dashbord/hrmdashboards/hrmdashboards.routes';
import { ClientDashboardRoutingModule } from '../../componets/dashbord/client-dashboard/client-dashboard.routes';
import { EmployeeDashboardRoutingModule } from '../../componets/dashbord/employee-dashboard/employee-dashboard.routes';
import { EmployessRoutingModule } from '../../componets/dashbord/hrmdashboards/employess/employess.routes';
import { AttendanceRoutingModule } from '../../componets/dashbord/hrmdashboards/attendance/attendance.routes';
import { PayrollRoutingModule } from '../../componets/dashbord/hrmdashboards/payroll/payroll.routes';
import { TaskDashboardRoutingModule } from '../../componets/dashbord/task-dashboard/task-dashboard.routes';
import { ProjectDashboardRoutingModule } from '../../componets/dashbord/project-dashboard/project-dashboard.routes';
import { JobDashboardRoutingModule } from '../../componets/dashbord/job-dashboard/job-dashboard.routes';
import { SuperAdminRoutingModule } from '../../componets/dashbord/super-admin/super-admin.routes';
import { UsersRoutingModule } from '../../componets/dashbord/hrmdashboards/users/users.routes';
import { BusinessDashboardRoutingModule } from '../../componets/dashbord/bussiness-dashboard/bussiness-dashboard.routes';
import { ProductionDashboardRoutingModule } from '../../componets/dashbord/production-dashboard/production-dashboard.routes';






export const content: Routes = [

  {
    path: '', children: [
      ...hrmdashboardRoutingModule.routes,
      ...ClientDashboardRoutingModule.routes,
      ...EmployessRoutingModule.routes,
      ...UsersRoutingModule.routes,
      ...AttendanceRoutingModule.routes,
      ...PayrollRoutingModule.routes,
      ...EmployeeDashboardRoutingModule.routes,
      ...TaskDashboardRoutingModule.routes,
      ...ProjectDashboardRoutingModule.routes,
      ...JobDashboardRoutingModule.routes,
      ...SuperAdminRoutingModule.routes,
      ...BusinessDashboardRoutingModule.routes,
      ...ProductionDashboardRoutingModule.routes,
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(content)],
  exports: [RouterModule]
})
export class SaredRoutingModule { }
