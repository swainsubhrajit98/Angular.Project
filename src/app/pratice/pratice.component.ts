import { Component } from '@angular/core';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent {

  AddStyle(){
    return{
      'font-size.px':20,
      'color':'red',
      'border-radius.px':10,
      'margin.px':10,
      'padding.px':10,
    }
  }
  AddClass(){
    return{
      'btn-bold':true,
      'btn-red':true
    }
  }
  displayValue='';
  getValue(val:string){
    this.displayValue=(val)
  }
  getData(){
    console.warn("Successfully Called the Function");
  }

  getInputData(val:any){
    console.warn(val)
  }
  count=0;
  counter(type:string){
    type=='sum' ? this.count++:this.count--;
  }
  show="yes";

}
