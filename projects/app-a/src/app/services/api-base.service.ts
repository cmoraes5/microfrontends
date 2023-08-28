import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiBaseServiceModel } from '../models/api-base-service.model';
import { IGame } from '../models/game.model';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService implements IApiBaseServiceModel {
  private apiBaseurl = '';

  constructor(
    private http: HttpClient,
    private environment: EnvironmentService
  ) {
    this.apiBaseurl = this.environment.getEnvironment().apiBaseUrl as string
  }

  addItem(newGame: IGame): Observable<IGame> {
    return this.http.post<IGame>(
      `${this.apiBaseurl}`,
      newGame
    );
  }

  getAllItems(): Observable<IGame[]> {
    return this.http.get<IGame[]>(
      `${this.apiBaseurl}`
    );
  }

  getItemById(id: string): Observable<IGame> {
    return this.http.get<IGame>(
      `${this.apiBaseurl}/${id}`,
    );
  }

  updateItemById(gameToUpdate: IGame): Observable<IGame> {
    return this.http.put<IGame>(
      `${this.apiBaseurl}/${gameToUpdate.id}`,
      gameToUpdate,
    );
  }

  deleteItem(id: string) {
    return this.http.delete<number>(
      `${this.apiBaseurl}/${id}`
    )
  }
}
