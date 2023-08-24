import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IGame } from '../../models/game.model';
import { ApiBaseService } from '../../services/api-base.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-game-form',
  templateUrl: './add-game-form.component.html',
  styleUrls: ['./add-game-form.component.scss']
})
export class AddGameFormComponent implements OnInit {

  @Output() gameAdded = new EventEmitter<IGame>();

  dataModel!: IGame;

  addGameFormGroup!: FormGroup;

  constructor(
    private dialog: MatDialogRef<AddGameFormComponent>,
    private formBuilder: FormBuilder,
    private api: ApiBaseService,
  ) {
    this.addGameFormGroup = this.formBuilder.group({
      'id': this.formBuilder.control(null),
      'titulo': this.formBuilder.control('', [Validators.required, Validators.maxLength(100)]),
      'modo': this.formBuilder.control('', Validators.maxLength(74)),
      'descricao': this.formBuilder.control('', [Validators.required, Validators.maxLength(380)]),
      'desenvolvedores': this.formBuilder.control('', [Validators.required, Validators.maxLength(120)])
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    const formToSend = this.setFormToSend()

    if (this.addGameFormGroup.valid)
      this.api.addItem(formToSend).subscribe((newGame: IGame) => {
        this.gameAdded.emit(newGame);

        this.dialog.close()
      });
  }

  setFormToSend() {
    return {
      titulo: this.addGameFormGroup.controls["titulo"].value,
      modo: this.addGameFormGroup.controls["modo"].value,
      descricao: this.addGameFormGroup.controls["descricao"].value,
      desenvolvedores: this.addGameFormGroup.controls["desenvolvedores"].value
    }
  }

}
