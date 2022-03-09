import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { PersonajesComponent } from './components/detalle-serie/personajes/personajes.component';
import { TemporadasComponent } from './components/detalle-serie/temporadas/temporadas.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/series' },
  { path: "series", component: ListaSeriesComponent },
  {
    path: "serie/:idserie", component: DetalleSerieComponent, children: [
      { path: '', component: PersonajesComponent },
      { path: 'personajes', component: PersonajesComponent },
      { path: 'temporadas', component: TemporadasComponent },
    ]
  },
  { path: "**", redirectTo: '/series' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
