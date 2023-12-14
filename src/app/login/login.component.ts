import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  msg!: string;
  showError: boolean = false;
  data={
    username:"",
    password:"",
  }
  constructor(private router: Router,private rData:DataShareService) { }

  login(){
    this.showError=false;
    debugger;
    
    if (this.data.username =='subhrajit98' && this.data.password =='Papu@1234') {
      this.rData.shareData=this.data;
      this.router.navigate(['home',{flag:true}]);
    } else {
      this.msg = "Please Enter Id and Password";
      this.showError = true;
      return;
    }
  }

}
