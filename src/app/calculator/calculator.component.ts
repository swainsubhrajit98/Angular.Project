// calculator.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
 
  
  result: number = 0;
  num1!: number;
  num2!: number;
  num3!:number;
  operator: string | undefined;
  
  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }
  }


  repeatCount: number = 1;
  generateHelloWorld() {
    for (let i = 0; i < this.repeatCount; i++) {
      window.alert('Hello,World!');
    }
  }
   
  
}
