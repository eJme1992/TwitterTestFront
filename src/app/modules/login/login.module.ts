import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    LoginComponent
  ],
})
export class LoginModule { }
