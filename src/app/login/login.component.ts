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
  data={
    username:"",
    password:"",
  }


  constructor(private router: Router) { }

  login(): void {
    
    if (this.data.username =='user1' && this.data.password =='password1') {
      
      this.router.navigate(['home',{flag:true}]);
    } else {
      alert('Invalid credentials');
    }
  }

}
