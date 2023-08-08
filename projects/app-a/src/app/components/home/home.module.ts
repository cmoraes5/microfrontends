import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
