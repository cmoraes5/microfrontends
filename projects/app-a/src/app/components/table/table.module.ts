import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ApiBaseServiceProvider } from '../../providers/api-base-service.provider';

import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';
import { AddGameFormModule } from '../add-game-form/add-game-form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateGameFormModule } from '../update-game-form/update-game-form.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AddGameFormModule,
    UpdateGameFormModule,
    MatButtonModule
  ],
  providers: [
    ApiBaseServiceProvider,
  ],
  exports: [TableComponent]
})
export class TableModule { }
