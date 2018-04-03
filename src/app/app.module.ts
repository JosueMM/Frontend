import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routing } from '../router.config';
import { MenuComponent } from './menu/menu.component';
import { Ng2CarouselamosModule } from "ng2-carouselamos";
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ChelicerataComponent } from './chelicerata/chelicerata.component';
import { HexapadaComponent } from './hexapada/hexapada.component';
import { UserComponent } from './user/user.component';
import { BuscarComponent } from './buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CalendarioComponent,
    ChelicerataComponent,
    HexapadaComponent,
    UserComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
