import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PonentesComponent } from './ponentes/ponentes.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { MarketingComponent } from './cat/marketing/marketing.component';
import { FotografiaComponent } from './cat/fotografia/fotografia.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { DisenoComponent } from './cat/diseno/diseno.component';
import { AnimacionComponent } from './cat/animacion/animacion.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    PonentesComponent,
    CategoriasComponent,
    MarketingComponent,
    FotografiaComponent,
    InicioSesionComponent,
    DisenoComponent,
    AnimacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
