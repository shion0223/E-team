import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SpotComponent } from './pages/spot/spot.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompleteComponent } from './pages/complete/complete.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    SpotComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CompleteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
