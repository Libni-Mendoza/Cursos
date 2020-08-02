import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router }from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PonentesComponent } from './ponentes/ponentes.component';


const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'ponentes', component: PonentesComponent},
  {path: 'categorias/marketing', component: PrincipalComponent},
  {path: '**', pathMatch: 'full', redirectTo:'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }