import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  user: any = {}


  constructor(
    private route: Router,
    private UserService: UserService,
  ) {
    this.user = UserService.getUser();
    console.log(this.user );
  }

  ngOnInit(): void {
  }

}
