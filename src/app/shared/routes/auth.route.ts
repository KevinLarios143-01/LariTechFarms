
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorRoutingModule } from '../../../app/componets/custom-pages/error/error.routes';

export const authen: Routes = [
  {
    path: '',
    children: [
      ...ErrorRoutingModule.routes,

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(authen)],
  exports: [RouterModule]
})
export class AuthenticationsRoutingModule { }
