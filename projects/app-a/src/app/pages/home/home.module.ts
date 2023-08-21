import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TableModule } from '../../components/table/table.module'

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    TableModule,
    CommonModule,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
