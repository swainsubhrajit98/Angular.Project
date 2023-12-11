import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  loginForm!: FormGroup;
  test!:FormControl;

  constructor(private formBuilder: FormBuilder) {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required,Validators.minLength(4)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
      this.test= new FormControl("Please Enter All Mandatory Field...")
  }



  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Perform login logic here
      console.log('Login successful!', this.loginForm.value);
    }
  }
}
