import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiBaseService } from '../../services/api-base.service';

import { IGame } from '../../models/game.model';

import { AddGameFormComponent } from '../add-game-form/add-game-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gameList: IGame[] = [];

  private isDialogOpen = false;

  constructor(
    private api: ApiBaseService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.getAllItems();

    this.api.getItemById('a01ec10c-f65b-4fb3-b97e-e754a25f2af2').subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }

  openDialog() {
    if (!this.isDialogOpen) {
      this.isDialogOpen = true;
      const dialogRef = this.dialog.open(AddGameFormComponent);

      dialogRef.componentInstance.gameAdded.subscribe((newGame: IGame) => {
        this.gameList.push(newGame);
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log()
        this.isDialogOpen = false;
      });
    }
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
