import { Injectable } from "@angular/core";
import { IApiBaseServiceModel } from "../models/api-base-service.model";

import { of } from 'rxjs';
import { IGame } from "../models/game.model";

@Injectable({
  providedIn: 'root',
})

export class ApiBaseMockService implements IApiBaseServiceModel {

  mockedItems: IGame[] = [{
    id: 1,
    titulo: "Homem Aranha",
    descricao: "Neste game, Peter Parker experiente e mais preparado para enfrentar a onda de crimes de Nova York. Em contrapartida, ele luta para conciliar sua vida pessoal e carreira caoticas enquanto o destino de milhoes de nova-iorquinos pesa sobre seus ombros",
    modo: "1 Jogador",
    desenvolvedores: "Insomniac Games"
  },
  {
    id: 2,
    titulo: "Grand Theft Auto V",
    descricao: "O game se passa no estado ficcional de San Andreas, baseado na California do Sul, nos EUA. Traz a historia de campanha simultonea de tres criminosos: o ladrao de bancos aposentado Michael 'Mike' De Santa, o gangster de rua Franklin Clinton e o traficante de armas psicopata Trevor Philips.",
    modo: "1 Jogador, Multijogador online",
    desenvolvedores: "Rockstar Games, Rockstar North"
  },
  {
    id: 3,
    titulo: "Cuphead",
    descricao: "Cuphead e um jogo eletronico de run and gun e plataforma criado pelos irm�os canadenses Chad e Jared Moldenhauer atravas da Studio MDHR. O jogo foi inspirado no estilo de animacao Rubber hose usado em desenhos animados da Era de Ouro da anima��o americana, como o trabalho dos est�dios Fleischer Studios, Warner Bros.",
    modo: "1 Jogador, Multijogador local, Multijogador online",
    desenvolvedores: "Studio MDHR"
  }]

  constructor() { }

  getAllItems() {
    return of(
      this.mockedItems
    )
  }

  getItemById(id: number) {
    const getById = this.mockedItems.find(item => item.id === id)
    return of(getById)
  };

  deleteItem(idParam: number) {
    const mockData = this.mockedItems;
    const indexOfObject = mockData.findIndex(
      ({ id }) => id === idParam
    );
    mockData.splice(indexOfObject, 1);

    return of('Deleted')
  };
}