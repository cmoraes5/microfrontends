import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

import { ApiBaseService } from '../../services/api-base.service';

import { IGame } from '../../models/game.model';
import { ErrorResponseModel } from '../../models/error-response.model';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GameFormComponent implements OnInit {

  gameToUpdate!: IGame;

  isUpdateMode: boolean;

  gameFormGroup: FormGroup;

  submitButtonText: string;

  isLoading!: boolean;

  constructor(
    private dialog: MatDialogRef<GameFormComponent>,
    private formBuilder: FormBuilder,
    private api: ApiBaseService,
    private snackBar: MatSnackBar,

    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.isUpdateMode = data && data.isUpdateMode ? true : false;
    this.gameToUpdate = data && data.gameToUpdate ? data.gameToUpdate : null;
    this.submitButtonText = this.isUpdateMode ? 'Update' : 'Create';

    this.gameFormGroup = this.formBuilder.group({
      'id': this.formBuilder.control(null),
      'titulo': this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      'modo': this.formBuilder.control('', Validators.maxLength(74)),
      'descricao': this.formBuilder.control('', [Validators.required, Validators.maxLength(380)]),
      'desenvolvedores': this.formBuilder.control('', [Validators.required, Validators.maxLength(120)])
    })
  }

  isUpdating: boolean = false;

  ngOnInit(): void {
    if (this.isUpdateMode) {
      this.gameFormGroup.patchValue({
        'id': this.gameToUpdate.id,
        'titulo': this.gameToUpdate.titulo,
        'modo': this.gameToUpdate.modo,
        'descricao': this.gameToUpdate.descricao,
        'desenvolvedores': this.gameToUpdate.desenvolvedores
      })
    }
  }

  handleCreate() {
    const formToSend = this.setFormToSend();

    if (this.gameFormGroup.valid) {
      this.isLoading = true;

      this.api.addItem(formToSend).subscribe({
        next: () => {
          this.isLoading = false

          this.dialog.close();
        },
        error: ({ error }: HttpErrorResponse) => {
          const backendError = error as ErrorResponseModel;

          this.isLoading = false;

          let errorMessage = 'Ocorreu um erro ao criar o jogo';

          if (backendError.message) {
            errorMessage = backendError.message;
          }

          this.snackBar.open(errorMessage, 'Fechar', {
            duration: 5000,
          });
        },
      });
    }
  }

  handleUpdate() {
    if (this.gameFormGroup.valid) {
      this.isLoading = true;

      this.api.updateItemById(this.gameFormGroup.value).subscribe({
        next: () => {
          this.isLoading = false

          this.dialog.close();
        },
        error: ({ error }: HttpErrorResponse) => {
          const backendError = error as ErrorResponseModel;

          this.isLoading = false;

          let errorMessage = 'Ocorreu um erro ao atualizar o jogo';

          if (backendError.message) {
            errorMessage = backendError.message;
          }

          this.snackBar.open(errorMessage, 'Fechar', {
            duration: 5000,
          });
        }
      });
    }
  }

  handleSubmit() {
    if (this.isUpdateMode) {
      this.handleUpdate();
    } else {
      this.handleCreate();
    }
  }

  setFormToSend(): IGame {
    return {
      titulo: this.gameFormGroup.controls["titulo"].value,
      modo: this.gameFormGroup.controls["modo"].value,
      descricao: this.gameFormGroup.controls["descricao"].value,
      desenvolvedores: this.gameFormGroup.controls["desenvolvedores"].value
    }
  }

  showErrorSnackbar(errorMessage: string): void {
    const config = new MatSnackBarConfig();
    this.snackBar.open(errorMessage, 'Fechar', config);
  }
}
