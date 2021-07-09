import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  token: any = null;
  constructor(
    protected http: HttpClient
  ) {

  }

  getToken(): any{
    console.log(localStorage.getItem('token'));
    let token = localStorage.getItem('token')

    if(token && token != 'undefined'){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  Register(request: any): any{
    this.getToken();
    console.log(this.token);
    const headers = new HttpHeaders().append('Authorization', this.token);
    return  this.http.post(environment.baseUrl + 'api/tweet/create',request,{ headers: headers });
  }

  SubirImg(file: any, id:number){
    const fd= new FormData;
    fd.append('image',file,file.name);
    this.getToken();
    console.log(this.token);
    const headers = new HttpHeaders().append('Authorization', this.token);
    return  this.http.post(environment.baseUrl + 'api/tweet/file/'+id , fd,{ headers: headers });
  }

  List(page: number): any{
    this.getToken();
    console.log(this.token);
    const headers = new HttpHeaders().append('Authorization', this.token);
    return  this.http.post(environment.baseUrl + 'api/tweet/list?page='+page ,'null',{ headers: headers });
  }
}
