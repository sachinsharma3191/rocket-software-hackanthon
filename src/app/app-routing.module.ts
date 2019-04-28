import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelterComponent} from './components/shelter/shelter.component';
import { FoodComponent} from './components/food/food.component';
import { HealthcareComponent} from './components/healthcare/healthcare.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
