import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  msg!: string;
  showError: boolean = false
  data={
    username:"",
    password:"",
  }
  constructor(private router: Router) { }

  login(){
    this.showError=false;
    debugger;
    
    if (this.data.username =='user' && this.data.password =='password') {
      this.router.navigate(['home',{flag:true}]);
    } else {
      this.msg = "Please Enter Id and Password";
      this.showError = true;
      return;
    }
  }

}
