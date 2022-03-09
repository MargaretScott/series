import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  arrPersonajes: Personaje[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesServices: PersonajesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.parent?.params.subscribe(params => {
      let idserie = parseInt(params['idserie']);
      //mi array de personajes lo tengo que llenar con los personajes de la serie qeu capturo su id.
      //llamo al servicio personajes y hago la peticion.
      this.arrPersonajes = this.personajesServices.getAllByIdSerie(idserie);
      console.log('personajes', this.arrPersonajes)
    })

  }

}
