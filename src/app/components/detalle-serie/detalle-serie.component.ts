import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-detalle-serie',
  templateUrl: './detalle-serie.component.html',
  styleUrls: ['./detalle-serie.component.css']
})
export class DetalleSerieComponent implements OnInit {

  miSerie: Serie | any;

  constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService) { }


  ngOnInit(): void {
    //cuando cargo el componente quiero saber que serie tengo que carga para ello voy hacer una peticion al servicio por id, que tengo que capturar de la ruta activa.
    this.activatedRoute.params.subscribe(params => {
      let id = parseInt(params['idserie'])
      this.miSerie = this.seriesService.getById(id);
      console.log(this.miSerie)
    })

  }


}
