import { Component, OnInit } from '@angular/core';
import { ApiBaseService } from '../../services/api-base.service';
import { IGame } from '../../models/game.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  gameList!: IGame[]

  constructor(private api: ApiBaseService) { }

  ngOnInit(): void {
    this.getAllItems()

    this.api.getItemById(2).subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }

  getAllItems() {
    this.api.getAllItems().subscribe({
      next: (data) => {
        this.gameList = data
      }
    })
  }

  deleteGame(id: number) {
    this.api.deleteItem(id).subscribe({
      next: () => {
        this.getAllItems()
      }
    })
  }

}
