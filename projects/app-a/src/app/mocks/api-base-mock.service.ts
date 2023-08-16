import { Injectable } from "@angular/core";
import { IApiBaseServiceModel } from "../models/api-base-service.model";

import { of } from 'rxjs';
import { IGame } from "../models/game.model";

@Injectable({
  providedIn: 'root',
})

export class ApiBaseMockService implements IApiBaseServiceModel {

  mockedItems: IGame[] = [{
    Id: 1,
    Titulo: "Homem Aranha",
    Descricao: "Neste game, Peter Parker experiente e mais preparado para enfrentar a onda de crimes de Nova York. Em contrapartida, ele luta para conciliar sua vida pessoal e carreira caoticas enquanto o destino de milhoes de nova-iorquinos pesa sobre seus ombros",
    Modo: "1 Jogador",
    Desenvolvedores: "Insomniac Games"
  },
  {
    Id: 2,
    Titulo: "Grand Theft Auto V",
    Descricao: "O game se passa no estado ficcional de San Andreas, baseado na California do Sul, nos EUA. Traz a historia de campanha simultonea de tres criminosos: o ladrao de bancos aposentado Michael 'Mike' De Santa, o gangster de rua Franklin Clinton e o traficante de armas psicopata Trevor Philips.",
    Modo: "1 Jogador, Multijogador online",
    Desenvolvedores: "Rockstar Games, Rockstar North"
  },
  {
    Id: 3,
    Titulo: "Cuphead",
    Descricao: "Cuphead e um jogo eletronico de run and gun e plataforma criado pelos irm�os canadenses Chad e Jared Moldenhauer atravas da Studio MDHR. O jogo foi inspirado no estilo de animacao Rubber hose usado em desenhos animados da Era de Ouro da anima��o americana, como o trabalho dos est�dios Fleischer Studios, Warner Bros.",
    Modo: "1 Jogador, Multijogador local, Multijogador online",
    Desenvolvedores: "Studio MDHR"
  }]

  constructor() { }

  getAllItems() {
    return of(
      this.mockedItems
    )
  }

  getItemById(id: number) {
    const getById = this.mockedItems.find(item => item.Id === id)
    return of(getById)
  };

  deleteItem(idParam: number) {
    const mockData = this.mockedItems;
    const indexOfObject = mockData.findIndex(
      ({ Id }) => Id === idParam
    );
    mockData.splice(indexOfObject, 1);

    return of('Deleted')
  };
}