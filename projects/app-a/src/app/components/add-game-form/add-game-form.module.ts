import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGameFormComponent } from './add-game-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [
    AddGameFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    AddGameFormComponent
  ]
})
export class AddGameFormModule { }
