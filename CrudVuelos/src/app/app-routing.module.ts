import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './Cliente/crear/crear.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { ListarVuelosComponent } from './Vuelos/listar-vuelos/listar-vuelos.component';


const routes: Routes = [
{path:'listar',component:ListarComponent},
{path: 'crear', component:CrearComponent},
{path: 'editar',component:EditarComponent},
{path: 'listarV',component:ListarVuelosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
