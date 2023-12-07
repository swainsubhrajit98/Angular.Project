import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { PraticeComponent } from './pratice/pratice.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ 
  { path: "",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"another-page",component: AnotherPageComponent },
  {path:"pratice",component:PraticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
