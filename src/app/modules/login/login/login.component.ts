import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: boolean = true;
  usernamev: boolean = true;
  emailv: boolean = true;
  usernamef: boolean = false;
  emailf: boolean = false;
  checked: boolean = false;


  DataForm: FormGroup = new FormGroup({
    password : new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
  });

  LoginForm: FormGroup = new FormGroup({
    password : new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  });

  constructor(
    private UserService: UserService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }




  searchWordMail(palabraBuscada: string): void {
    setTimeout(() => {
     this.ValidarCorreo(palabraBuscada);
    }, 500);
  }

  searchWordUserName(palabraBuscada: string): void {
    setTimeout(() => {
      this.ValidarUserName(palabraBuscada);
    }, 500);
  }

  ValidarCorreo(email:string):void{
    this.UserService.ValidarCorreo(email).subscribe((data: any) => {
      this.emailf = true;
      this.emailv = data.data;
      console.log(this.emailv);
    })
  }

  ValidarUserName(user:string):void{
    this.UserService.ValidarUserName(user).subscribe((data: any) => {
      this.usernamef = true;
      this.usernamev = data.data;
      console.log(this.usernamev);
    });
  }

  eventCheck(event: any): void {
    console.log(event.target.checked)
    this.checked = event.target.checked;
  }



  onSubmit(): void {
    let sentinela: number = 0;
    const data: any = this.DataForm.value;


    if (sentinela === 0) {
      let request: any = {
        'json':  JSON.stringify(data)
      };

      this.UserService.Register(request).subscribe((data: any) => {
        Swal.fire(
          'Good job!',
          'Account registered successfully !',
          'success'
        )
        this.  DataForm = new FormGroup({
          password : new FormControl('',Validators.required),
          username: new FormControl('',Validators.required),
          email: new FormControl('',Validators.required),
          first_name: new FormControl('',Validators.required),
          last_name: new FormControl('',Validators.required),
        });
      });
  }
}

  onSubmitLogin(): void {
    let sentinela: number = 0;
    const data: any = this.LoginForm.value;

    if (sentinela === 0) {
      let request: any = {
        'json':  JSON.stringify(data)
      };

      this.UserService.Login(request).subscribe((data: any) => {
        console.log(data);
        if(data.data.status=='succes'){

          Swal.fire(
            'Good job!',
            'Account registered successfully !',
            'success'
          )
          localStorage.setItem('token',data.data.data);
          localStorage.setItem('user',JSON.stringify(data.data.user));
          this.route.navigate(['/home']);
         // console.log(data.data.data);
        }else{
          Swal.fire(
            'Error!',
            'Wrong user !',
            'error'
          )
        }
      });
    }
  }

}
