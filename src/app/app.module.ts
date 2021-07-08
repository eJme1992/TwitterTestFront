import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginComponent} from "./modules/login/login/login.component";
import { HomeComponent } from './modules/home/home.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { NavComponent } from './modules/componentes/nav/nav.component';
import { FooterComponent } from './modules/componentes/footer/footer.component';
import { PerfilInfoComponent } from './modules/componentes/perfil-info/perfil-info.component';
import { TweetInputComponent } from './modules/componentes/tweet-input/tweet-input.component';
import { TweetCardComponent } from './modules/componentes/tweet-card/tweet-card.component';

import { MainLayoutComponent } from './modules/main-layout/main-layout.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    NavComponent,
    FooterComponent,
    PerfilInfoComponent,
    TweetInputComponent,
    TweetCardComponent,
    MainLayoutComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
