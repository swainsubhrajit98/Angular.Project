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
  color="blue";
  bgColor="green"
  users=['Alok','Amit','Soumya','Sarvam','Kanchan','Sai']
  userDetails=[
    {name:'Sarvam',email:'sarvam@gmail.com',phNo:'9870098009',social:['Facebook','Instagram','Snapchat']},
    {name:'Soumya',email:'soumya@gmail.com',phNo:'9870098000',social:['YouTube','Instagram','Snapchat']},
    {name:'Alok',email:'alok@gmail.com',phNo:'9870098005',social:['Gmail','Instagram','Telegram']},
    {name:'Sai',email:'sai@gmail.com',phNo:'9870098003',social:['Yahoo','Instagram','Indeed']},
    {name:'Kanchan',email:'kanchan@gmail.com',phNo:'9870098008',social:['Facebook','Instagram','Snapchat']},
    {name:'Amit',email:'amit@gmail.com',phNo:'9870098002',social:['Facebook','YouTube','Snapchat']},
  ]

  updateColor(){
    this.color="green";
    this.bgColor="blue";
  }

}
