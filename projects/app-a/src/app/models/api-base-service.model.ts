import { Observable } from "rxjs";
import { IGame } from "./game.model";

export interface IApiBaseServiceModel {
  getAllItems(): Observable<IGame[]>;

  getItemById(id: string): Observable<IGame>;

  deleteItem(id: string): any;

  addItem(newGame: IGame): any;
}