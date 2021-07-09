import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from "./modules/login/login/login.component";
import {HomeComponent} from "./modules/home/home.component";
import {MainLayoutComponent} from "./modules/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'logout/:id', component: LoginComponent }
    ]
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
        { path: '', component: HomeComponent },
    ]
  },
    // { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'invoice', component: InvoicePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
