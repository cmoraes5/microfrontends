import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IGame } from '../../models/game.model';
import { ApiBaseService } from '../../services/api-base.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  @Output() gameUpdated = new EventEmitter<IGame>();

  @Output() gameAdded = new EventEmitter<IGame>();

  gameToUpdate!: IGame;

  isUpdateMode: boolean;

  gameFormGroup: FormGroup;

  submitButtonText: string;

  constructor(
    private dialog: MatDialogRef<GameFormComponent>,
    private formBuilder: FormBuilder,
    private api: ApiBaseService,

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

  handleSubmit() {
    const formToSend = this.setFormToSend()

    if (this.gameFormGroup.valid)
      this.api.addItem(formToSend).subscribe((newGame: IGame) => {
        this.gameAdded.emit(newGame);

        this.dialog.close()
      });
  }

  setFormToSend() {
    return {
      titulo: this.gameFormGroup.controls["titulo"].value,
      modo: this.gameFormGroup.controls["modo"].value,
      descricao: this.gameFormGroup.controls["descricao"].value,
      desenvolvedores: this.gameFormGroup.controls["desenvolvedores"].value
    }
  }

}
