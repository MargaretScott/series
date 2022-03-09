import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { CardSerieComponent } from './components/card-serie/card-serie.component';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { PersonajesComponent } from './components/detalle-serie/personajes/personajes.component';
import { TemporadasComponent } from './components/detalle-serie/temporadas/temporadas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    CardSerieComponent,
    DetalleSerieComponent,
    PersonajesComponent,
    TemporadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
