import { Observable } from "rxjs";
import { IGame } from "./game.model";

export interface IApiBaseServiceModel {
  getAllItems(): Observable<IGame[]>;

  getItemById(id: number): any;

  deleteItem(id: number): any;
}