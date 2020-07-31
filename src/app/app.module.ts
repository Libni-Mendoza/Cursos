import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PonentesComponent } from './ponentes/ponentes.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    PonentesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
