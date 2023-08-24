import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiBaseService } from '../../services/api-base.service';

import { IGame } from '../../models/game.model';

import { AddGameFormComponent } from '../add-game-form/add-game-form.component';
import { UpdateGameFormComponent } from '../update-game-form/update-game-form.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gameList: IGame[] = [];

  constructor(
    private api: ApiBaseService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(AddGameFormComponent);

    dialogRef.componentInstance.gameAdded.subscribe((newGame: IGame) => {
      this.getAllItems()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log()
    });
  }

  openUpdateDialog(gameToUpdate: IGame) {
    const dialogRef = this.dialog.open(UpdateGameFormComponent, {
      data: gameToUpdate
    });

    dialogRef.componentInstance.gameUpdated.subscribe((gameToUpdate: IGame) => {
      this.getAllItems()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log()
    });
  }

  deleteGame(id?: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: `Tem certeza de que deseja deletar este jogo?`,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm" && id)
        this.api.deleteItem(id).subscribe({
          next: () => {
            this.getAllItems()
          }
        })
    });
  }

  getAllItems() {
    this.api.getAllItems().subscribe({
      next: (data) => {
        this.gameList = data
      }
    })
  }
}
