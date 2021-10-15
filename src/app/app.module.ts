import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { ListarComponent } from './components/listar/listar.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { RegistrocliComponent } from './components/registrocli/registrocli.component';
import { ListadocliComponent } from './components/listadocli/listadocli.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListarComponent,
    Pagina404Component,
    RegistrocliComponent,
    ListadocliComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
