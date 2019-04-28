import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelterComponent} from './components/shelter/shelter.component';
import { FoodComponent} from './components/food/food.component';
import { HealthcareComponent} from './components/healthcare/healthcare.component';
import { SignupComponent} from './auth/signup/signup.component';
import { SigninComponent} from './auth/signin/signin.component';



const routes: Routes = [
  { path: 'shelter',
    component: ShelterComponent
  },
  {
    path: 'food',
    component: FoodComponent
  },
  { path: 'healthcare',
    component: HealthcareComponent
  },
  {
    path: 'map',
    component: MapComponent
  }
  /*{
    path: "signup",
    component : SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
