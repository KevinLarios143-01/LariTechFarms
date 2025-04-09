import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { Blog01Component } from './blog01/blog01.component';
import { Blog03Component } from './blog03/blog03.component';
import { Blog02Component } from './blog02/blog02.component';
import { BlogStylesComponent } from './blog-styles/blog-styles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
//import { NgxDropzoneCdkModule } from '@ngx-dropzone/cdk';
//import { NgxDropzoneMaterialModule } from '@ngx-dropzone/material';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
  declarations: [
    Blog01Component,
    Blog03Component,
    Blog02Component,
    BlogStylesComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgbModule,
    NgSelectModule,
    DropzoneModule,
    NgxDropzoneModule,
    AngularEditorModule,
    HttpClientModule
  ],
  providers:[

    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
  ]
})
export class BlogModule { }
