import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { HomeComponent } from './home/home.component';
import { PraticeComponent } from './pratice/pratice.component';
import { CustDirectiveDirective } from './cust-directive.directive';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AnotherPageComponent,
    HomeComponent,
    PraticeComponent,
    CustDirectiveDirective,
    LoginComponent,
    NavBarComponent,
    ReactiveFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
