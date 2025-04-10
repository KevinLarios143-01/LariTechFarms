import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { LeafletComponent } from './leaflet/leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    LeafletComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
    HttpClientModule,
    LeafletModule,
  ]
})
export class MapsModule { }
