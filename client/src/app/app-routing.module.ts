import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';

//Guard
import { AuthGuard} from './guards/auth/auth.guard';
import { PublicarProductoUsuarioComponent } from './componentes/publicar-producto-usuario/publicar-producto-usuario.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Registro', component: RegistroComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Articulos', component:ArticulosComponent},
  {path: 'TiendasOficiales', component:TiendaComponent},
  {path: 'Categorias', component:CategoriasComponent},
  {path: 'AgregarProducto', component:PublicarProductoUsuarioComponent},
  {path: 'Pefil', component:PerfilUsuarioComponent, canActivate : [ AuthGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
