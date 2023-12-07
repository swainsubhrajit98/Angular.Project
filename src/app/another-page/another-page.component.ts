import { Component } from '@angular/core';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.component.html',
  styleUrls: ['./another-page.component.css']
})
export class AnotherPageComponent {
  currentNumber = '0';
  currentInput: string = '';
  operator: string = '';
  previousInput: string = '';
  

  
  
  onNumberClick(value: string) {
    this.currentInput += value;
    this.currentNumber = this.currentInput;
  }

  onOperatorClick(operator: string) {
    if (this.operator && this.currentInput !== '') {
      this.calculate();
    }
    this.operator = operator;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  onEqualClick() {
    this.calculate();
    this.operator = '';
  }

  onClearClick() {
    this.currentNumber = '0';
    this.currentInput = '';
    this.operator = '';
    this.previousInput = '';
  }

  private calculate() {
    const num1 = parseFloat(this.previousInput);
    const num2 = parseFloat(this.currentInput);

    switch (this.operator) {
      case '+':
        this.currentNumber = (num1 + num2).toString();
        break;
      case '-':
        this.currentNumber = (num1 - num2).toString();
        break;
      case '*':
        this.currentNumber = (num1 * num2).toString();
        break;
      case '/':
        this.currentNumber = (num1 / num2).toString();
        break;
      default:
        break;
    }

    this.currentInput = this.currentNumber;
    this.previousInput = '';
    
  }
}
