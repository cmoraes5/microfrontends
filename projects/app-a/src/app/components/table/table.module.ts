import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { GameFormModule } from '../game-form/game-form.module';

import { ApiBaseServiceProvider } from '../../providers/api-base-service.provider';

import { TableComponent } from './table.component';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    GameFormModule
  ],
  providers: [
    ApiBaseServiceProvider,
  ],
  exports: [TableComponent]
})
export class TableModule { }
