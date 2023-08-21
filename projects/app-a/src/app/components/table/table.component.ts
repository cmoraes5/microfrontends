import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiBaseService } from '../../services/api-base.service';

import { IGame } from '../../models/game.model';

import { AddGameFormComponent } from '../add-game-form/add-game-form.component';
import { UpdateGameFormComponent } from '../update-game-form/update-game-form.component';

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

  findGameById() {
    this.api.getItemById('a01ec10c-f65b-4fb3-b97e-e754a25f2af2').subscribe({
      next: (data) => {
        console.log(data)
      }
    })
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

  getAllItems() {
    this.api.getAllItems().subscribe({
      next: (data) => {
        this.gameList = data
      }
    })
  }

  deleteGame(id?: string) {
    if (id)
      this.api.deleteItem(id).subscribe({
        next: () => {
          this.getAllItems()
        }
      })
  }

}
