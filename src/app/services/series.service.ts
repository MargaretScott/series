import { Injectable } from '@angular/core';
import { Serie } from '../interfaces/serie.interface';
import { SERIES } from '../db/series.db';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private arrSeries: Serie[]

  constructor() {
    this.arrSeries = SERIES;
  }

  getAll(): Serie[] {
    return this.arrSeries;
  }

  getById(pId: number): Serie | any {
    //find es un metodo de array que busca un unico objeto y el primero que encuentra me devuelve.
    return this.arrSeries.find(serie => serie.id === pId);
  }

  getSeasonsByIdSerie(id: number): string[] {
    let temporadas: string[] = [];

    this.arrSeries.forEach(serie => {
      if (serie.id === id) {
        temporadas = serie.temporadas
      }
    })

    return temporadas;
  }

  getByRating(pRating: number): Serie[] {
    return this.arrSeries.filter(serie => serie.rating >= pRating && serie.rating < pRating + 1)
  }

  getByTitle(pTitle: string): Serie[] {
    return this.arrSeries.filter(serie => serie.titulo.toLowerCase().includes(pTitle.toLowerCase()))
  }


}
