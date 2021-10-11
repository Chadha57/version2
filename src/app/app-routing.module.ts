import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DossierComponent } from './dossier/dossier.component';

const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'inscription',component : InscriptionComponent},
  {path:'dossier',component : DossierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
