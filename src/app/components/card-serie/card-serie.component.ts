import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'app-card-serie',
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.css']
})
export class CardSerieComponent implements OnInit {

  @Input() miSerie: Serie | any;

  constructor() { }

  ngOnInit(): void {
  }

}
