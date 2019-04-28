import { AuthService } from './auth/auth.service';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelterComponent} from './components/shelter/shelter.component';
import { FoodComponent} from './components/food/food.component';
import { HealthcareComponent} from './components/healthcare/healthcare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgmCoreModule } from '@agm/core';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MapComponent } from './components/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    ShelterComponent,
    HealthcareComponent,
    FoodComponent,
    SignupComponent,
    SigninComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCraWCz0fI4JwuSnRXnGnEeypCPDvXV8A'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
