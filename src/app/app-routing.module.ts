import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router }from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PonentesComponent } from './ponentes/ponentes.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FotografiaComponent } from './cat/fotografia/fotografia.component';
import { MarketingComponent } from './cat/marketing/marketing.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'ponentes', component: PonentesComponent},
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'cat/fotografia', component: FotografiaComponent},
  {path: 'cat/marketing', component:MarketingComponent},

  {path: '**', pathMatch: 'full', redirectTo:'principal'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }