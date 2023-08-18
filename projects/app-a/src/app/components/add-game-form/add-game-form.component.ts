import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { IGame } from '../../models/game.model';
import { ApiBaseService } from '../../services/api-base.service';

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
    private formBuilder: FormBuilder,
    private api: ApiBaseService,
  ) {
    this.addGameFormGroup = this.formBuilder.group({
      'id': this.formBuilder.control(null),
      'titulo': this.formBuilder.control(''),
      'descricao': this.formBuilder.control(''),
      'modo': this.formBuilder.control(''),
      'desenvolvedores': this.formBuilder.control('')
    })
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    const formToSend = this.setFormToSend()

    this.api.addItem(formToSend).subscribe((newGame: IGame) => {
      this.gameAdded.emit(newGame);
    });
  }

  setFormToSend() {
    return {
      titulo: this.addGameFormGroup.controls["titulo"].value,
      descricao: this.addGameFormGroup.controls["descricao"].value,
      modo: this.addGameFormGroup.controls["modo"].value,
      desenvolvedores: this.addGameFormGroup.controls["desenvolvedores"].value
    }
  }

}
