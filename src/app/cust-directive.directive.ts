import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective {

  constructor(private eleRef: ElementRef) { 
    eleRef.nativeElement.style.background = 'yellow';
    eleRef.nativeElement.style.color = 'red';
  }

}
