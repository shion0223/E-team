import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SpotComponent } from './pages/spot/spot.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< Updated upstream
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CompleteComponent } from './pages/complete/complete.component';

=======
import { SerchDialogComponent } from './components/serch-dialog/serch-dialog.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    DetailComponent,
    SpotComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CompleteComponent,


=======
    HomeComponent,
    SerchDialogComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
