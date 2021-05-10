import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { GaleriaComponent } from './galeria/galeria.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'beneficios', component: BeneficiosComponent},
  { path: 'galeria', component: GaleriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
