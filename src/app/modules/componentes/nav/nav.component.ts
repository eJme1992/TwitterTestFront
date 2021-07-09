import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    console.log('entor');
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      console.log('se ejecuto');


  }

}
