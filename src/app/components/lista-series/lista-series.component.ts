import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  series: Serie[] = []
  constructor(private seriesServices: SeriesService) { }

  ngOnInit(): void {
    this.series = this.seriesServices.getAll();
  }

  recogerDatosSelect($event: any) {
    if ($event.target.value !== "") {
      //filtramos
      let rating = parseInt($event.target.value)
      this.series = this.seriesServices.getByRating(rating);
    } else {
      this.series = this.seriesServices.getAll();
    }

  }

  recogerDatosSearch($event: any) {
    let titulo = $event.target.value;
    this.series = this.seriesServices.getByTitle(titulo)

  }

}
