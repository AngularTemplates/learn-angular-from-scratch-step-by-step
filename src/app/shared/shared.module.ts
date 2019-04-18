import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SDKBrowserModule } from '../../../sdk/index';
import { SlugifyPipe } from '../shared/slugify.pipe';
// Material modules
import {
  MatDialogModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatChipsModule
} from '@angular/material';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    SlugifyPipe
  ],
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    SlugifyPipe
  ],
  exports: [
    BreadcrumbComponent,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    // Material modules
    MatDialogModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class SharedModule { }
