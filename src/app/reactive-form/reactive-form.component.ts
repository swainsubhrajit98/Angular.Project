import { Component } from '@angular/core';
import { Login } from '../class/login';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
    loginId!: string;
  password!: string;
  msg1!: string;
  msg2!: string;
  showError1: boolean = false
  showError2: boolean = false
  showRem: any;
  
  

  login(){
    this.showError1=false;
    debugger;
    
    if (this.loginId=="" || !this.loginId) {
      this.msg1 = "Please Enter Id and Password";
      this.showError1 = true;
      return;
    }
    let requestData: Login = { userId: this.loginId, password: this.password };
    alert(JSON.stringify(requestData));
  }
  formGroup!: FormGroup
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      userId: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.maxLength(8)]],
      personal:this.fb.group({ address1: [], address2: []})
    });
  }

  onLoginReactive(){
    this.showError2=false;
    debugger;
    if(!this.formGroup.valid){
    this.msg2="Please input All input Fields!!!";
    this.showError2 = true;
    return;
    }
    
    alert(JSON.stringify(this.formGroup.value))
  }
}
