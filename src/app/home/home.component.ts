import { Component } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any;
  navigateToAngularLink() {
    window.location.href = 'https://angular.io/guide/lifecycle-hooks';
  }
constructor(private rData:DataShareService){
  
}
ngOnInit(){
  this.data=this.rData.shareData;
}
}
