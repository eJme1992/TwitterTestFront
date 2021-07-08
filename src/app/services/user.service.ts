import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user: any = null;
token: any = null;

  constructor(
    protected http: HttpClient
  ) { }


  getUser(): any{

    let user = JSON.parse( localStorage.getItem('user') || '{}');
    console.log(user);
    if(user && user != 'undefined'){
      this.user = user;
    }else{
      this.user = null;
    }
    return this.user;
  }

  getToken(): any{
    let token = JSON.parse( localStorage.getItem('token') || '{}' );
    if(token && token ==! 'undefined'){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

 /* SERVICIOS VARIOS SIN AUTH */
  ValidarCorreo(email: string): any{
    return  this.http.get(environment.baseUrl + 'api/user/validate/email/' + email);
  }

  ValidarUserName(username: string): any{
   return  this.http.get(environment.baseUrl + 'api/user/validate/username/' + username);
  }

  Register(request: any): any{
    return  this.http.post(environment.baseUrl + 'api/user/register',  request);
  }

  Login(request: any): any{
    return  this.http.post(environment.baseUrl + 'api/user/login',  request);
  }


}
