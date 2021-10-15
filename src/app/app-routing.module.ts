import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListadocliComponent } from './components/listadocli/listadocli.component';
import { ListarComponent } from './components/listar/listar.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { RegistrocliComponent } from './components/registrocli/registrocli.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'crear', component: CreateComponent},
  {path:'editar/:id', component: CreateComponent},
  {path: '404', component: Pagina404Component},

  {path: 'clientes', component:RegistrocliComponent},
  {path: 'listado',component:ListadocliComponent},
  {path: 'edit/:id',component:RegistrocliComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
