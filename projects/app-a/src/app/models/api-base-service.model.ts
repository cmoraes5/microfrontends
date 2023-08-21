import { Observable } from "rxjs";
import { IGame } from "./game.model";

export interface IApiBaseServiceModel {
  addItem(newGame: IGame): any;

  getAllItems(): Observable<IGame[]>;

  getItemById(id: string): Observable<IGame>;

  updateItemById(gameToUpdate: IGame): Observable<IGame>

  deleteItem(id: string): any;
}