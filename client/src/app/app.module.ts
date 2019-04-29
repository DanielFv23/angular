import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavigationsComponent } from './componentes/navigations/navigations.component';
import { LoginComponent } from './componentes/login/login.component';
import { CategoriasComponent } from './componentes/categorias/categorias.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';


//Importacion del Servicio
import { GeneralService } from './servicios/serviceGeneral/general.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PerfilUsuarioComponent } from './componentes/perfil-usuario/perfil-usuario.component';
import { PublicarProductoUsuarioComponent } from './componentes/publicar-producto-usuario/publicar-producto-usuario.component';
//Importacion del Guardian
import { AuthGuard} from './guards/auth/auth.guard';
//Importacion del Toast
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    FooterComponent,
    NavigationsComponent,
    LoginComponent,
    CategoriasComponent,
    TiendaComponent,
    ArticulosComponent,
    PerfilUsuarioComponent,
    PublicarProductoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [ GeneralService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
