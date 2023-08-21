import { Injectable } from "@angular/core";

import { IGame } from './../models/game.model';
import { IApiBaseServiceModel } from "../models/api-base-service.model";

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiBaseMockService implements IApiBaseServiceModel {

  mockedItems: IGame[] = [{
    id: '17e5dd39-b88c-4701-8f53-979191362d8c"',
    titulo: "Homem Aranha",
    descricao: "Neste game, Peter Parker experiente e mais preparado para enfrentar a onda de crimes de Nova York. Em contrapartida, ele luta para conciliar sua vida pessoal e carreira caoticas enquanto o destino de milhoes de nova-iorquinos pesa sobre seus ombros",
    modo: "1 Jogador",
    desenvolvedores: "Insomniac Games"
  },
  {
    id: 'a01ec10c-f65b-4fb3-b97e-e754a25f2af2',
    titulo: "Grand Theft Auto V",
    descricao: "O game se passa no estado ficcional de San Andreas, baseado na California do Sul, nos EUA. Traz a historia de campanha simultonea de tres criminosos: o ladrao de bancos aposentado Michael 'Mike' De Santa, o gangster de rua Franklin Clinton e o traficante de armas psicopata Trevor Philips.",
    modo: "1 Jogador, Multijogador online",
    desenvolvedores: "Rockstar Games, Rockstar North"
  },
  {
    id: 'a01ec10c-f65b-4fb3-b97e-e754a25f2af2',
    titulo: "Cuphead",
    descricao: "Cuphead e um jogo eletronico de run and gun e plataforma criado pelos irm�os canadenses Chad e Jared Moldenhauer atravas da Studio MDHR. O jogo foi inspirado no estilo de animacao Rubber hose usado em desenhos animados da Era de Ouro da anima��o americana, como o trabalho dos est�dios Fleischer Studios, Warner Bros.",
    modo: "1 Jogador, Multijogador local, Multijogador online",
    desenvolvedores: "Studio MDHR"
  }]

  constructor() { }

  addItem(
    newGame: IGame,
  ) {
    debugger
    let newGameId = '';

    const gameList = this.mockedItems
    newGameId = (gameList.length + 1).toString();

    gameList.push({ ...newGame, id: newGameId });

    return of(newGame.titulo)
  }

  getAllItems() {
    return of(
      this.mockedItems
    )
  }

  getItemById(id: string): Observable<IGame> {
    const getById = this.mockedItems.find(item => item.id === id) as IGame
    return of(getById)
  };

  updateItemById(gameToUpdate: IGame) {
    const gameList = this.mockedItems
    const newGameValue = gameToUpdate

    const indexOfGame = gameList.findIndex(
      ({ id }) => id === newGameValue.id,
    );

    gameList.splice(indexOfGame, 1);
    gameList.push(newGameValue);

    return of(gameToUpdate);
  }

  deleteItem(idParam: string) {
    const gameList = this.mockedItems;
    const indexOfGame = gameList.findIndex(
      ({ id }) => id === idParam
    );
    gameList.splice(indexOfGame, 1);

    return of('Deleted')
  };
}