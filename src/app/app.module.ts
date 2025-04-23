import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PlatoComponent } from './components/receta/plato.component';
import { RecetaComponent } from './components/receta/receta.component';
import { HomeComponent } from './pages/home/home.component';
import { PlatosComponent } from './pages/platos/platos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlatosComponent,
    PlatoComponent,
    RecetaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
