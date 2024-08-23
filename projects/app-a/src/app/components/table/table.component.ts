import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ApiBaseService } from '../../services/api-base.service';

import { IGame } from '../../models/game.model';

import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { GameFormComponent } from '../game-form/game-form.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gameList: IGame[] = [];

  isLoading: boolean = false;

  hasError: boolean = false;

  errorText!: string

  errorStatus!: string;

  constructor(
    private api: ApiBaseService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.loadGameList();
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(GameFormComponent, {
      data: { isUpdateMode: false },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadGameList();
    });
  }

  openUpdateDialog(gameToUpdate: IGame) {
    const dialogRef = this.dialog.open(GameFormComponent, {
      data: { isUpdateMode: true, gameToUpdate: gameToUpdate },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadGameList();
    });
  }

  deleteGame(id: string) {
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: `Tem certeza de que deseja deletar este jogo?`,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") {

        this.isLoading = true;
        this.hasError = false;

        this.api.deleteItem(id).subscribe(() => {
          this.loadGameList(); // Verificar pq da demora do carregamento
        });
      }
    });
  }

  loadGameList() {
    this.isLoading = true;
    this.hasError = false;

    this.api.getAllItems().subscribe({
      next: (data) => {
        this.gameList = data

        this.isLoading = false;
        this.hasError = false;
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.hasError = true;

        this.errorStatus = `Status do erro: ${error.status}`;

        if (error.status === 0) {
          this.errorText = 'Houve um erro inesperado, pedimos perdão😔';
        } else {
          this.errorText = `${error.message}`;
        }
      }
    })
  }
}
