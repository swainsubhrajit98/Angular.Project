import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
shareData:any;
  constructor() {


   }
   get dataShare(){
    return this.shareData;
  }
  set dataShare(obj){
    this.shareData=obj;
  }
}
