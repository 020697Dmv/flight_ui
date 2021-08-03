import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { EditarComponent } from './Cliente/editar/editar.component';
import { CrearComponent } from './Cliente/crear/crear.component';
import { FormsModule } from '@angular/forms'; 
import { ServiceService } from './Service/service.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ListarVuelosComponent } from './Vuelos/listar-vuelos/listar-vuelos.component'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory (http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditarComponent,
    CrearComponent,
    ListarVuelosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
