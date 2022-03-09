import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  arrTemporadas: string[] = []

  constructor(private activatedRoute: ActivatedRoute, private seriesServices: SeriesService) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      let idserie = parseInt(params['idserie']);
      this.arrTemporadas = this.seriesServices.getSeasonsByIdSerie(idserie);
    })
  }

}
