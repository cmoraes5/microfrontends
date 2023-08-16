import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ApiBaseServiceProvider } from '../../providers/api-base-service.provider';

import { MatCardModule } from '@angular/material/card'



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [
    ApiBaseServiceProvider,
  ],
  exports: [TableComponent]
})
export class TableModule { }
