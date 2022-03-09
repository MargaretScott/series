import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private arrPersonajes: Personaje[]

  constructor() {
    this.arrPersonajes = PERSONAJES
  }

  getAllByIdSerie(idserie: number): Personaje[] {
    return this.arrPersonajes.filter(personaje => personaje.serie === idserie)
  }
}
