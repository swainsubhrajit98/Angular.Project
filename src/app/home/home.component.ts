import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  navigateToAngularLink() {
    window.location.href = 'https://angular.io/guide/lifecycle-hooks';
  }

}
