import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IGame } from '../../models/game.model';
import { ApiBaseService } from '../../services/api-base.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-game-form',
  templateUrl: './update-game-form.component.html',
  styleUrls: ['./update-game-form.component.scss']
})
export class UpdateGameFormComponent implements OnInit {

  @Input() gameToUpdate!: IGame;

  @Output() gameUpdated = new EventEmitter<IGame>();

  dataModel!: IGame;

  updateGameFormGroup!: FormGroup;

  constructor(
    private dialog: MatDialogRef<UpdateGameFormComponent>,
    private formBuilder: FormBuilder,
    private api: ApiBaseService,

    @Inject(MAT_DIALOG_DATA) public data: IGame,
  ) {
    this.updateGameFormGroup = this.formBuilder.group({
      'id': this.formBuilder.control(''),
      'titulo': this.formBuilder.control('', Validators.required),
      'descricao': this.formBuilder.control(''),
      'modo': this.formBuilder.control('', Validators.required),
      'desenvolvedores': this.formBuilder.control('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.updateGameFormGroup.patchValue({
      'id': this.data.id,
      'titulo': this.data.titulo,
      'descricao': this.data.descricao,
      'modo': this.data.modo,
      'desenvolvedores': this.data.desenvolvedores
    })
  }

  handleSubmit() {
    const formToSend = this.updateGameFormGroup.value;

    if (this.updateGameFormGroup.valid)
      this.api.updateItemById(formToSend).subscribe((gameToUpdate: IGame) => {
        this.gameUpdated.emit(gameToUpdate);

        this.dialog.close()
      });
  }
}
