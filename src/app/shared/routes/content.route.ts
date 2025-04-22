import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { hrmdashboardRoutingModule } from '../../../app/componets/dashbord/hrmdashboards/hrmdashboards.routes';






export const content: Routes = [

  { path: '', children: [
    ...hrmdashboardRoutingModule.routes,
    
  ]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(content)],
  exports: [RouterModule]
})
export class SaredRoutingModule { }