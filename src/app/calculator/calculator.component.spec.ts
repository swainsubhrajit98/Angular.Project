import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent],
      imports:[FormsModule]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should perform addition correctly', () => {
    component.num1 = 5;
    component.num2 = 3;
    component.operator = '+';
    component.calculate();
    expect(component.result).toBe(8);
  });

  it('should perform subtraction correctly', () => {
    component.num1 = 10;
    component.num2 = 4;
    component.operator = '-';
    component.calculate();
    expect(component.result).toBe(6);
  });

  it('should perform multiplication correctly', () => {
    component.num1 = 6;
    component.num2 = 7;
    component.operator = '*';
    component.calculate();
    expect(component.result).toBe(42);
  });

  it('should perform division correctly', () => {
    component.num1 = 15;
    component.num2 = 3;
    component.operator = '/';
    component.calculate();
    expect(component.result).toBe(5);
  });
});
