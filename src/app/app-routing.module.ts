import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantformComponent } from './restaurantform/restaurantform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authGuard } from './service/auth.guard';
import { EditrestaurantComponent } from './editrestaurant/editrestaurant.component';

const routes: Routes = [
  {path: '', redirectTo: 'restaurants', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'restaurants', component:RestaurantsComponent},
  {path:'add', component:RestaurantformComponent, canActivate:[authGuard]},
  {path:'edit', component:EditrestaurantComponent, canActivate:[authGuard]},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
