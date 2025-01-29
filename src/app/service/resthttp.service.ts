import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router'; // Import Router
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class ResthttpService {
  url:string = "http://localhost:3000/restaurants";
  constructor(private http:HttpClient, private router: Router) { } // Add Router to constructor

  getRestaurants():Observable<any>{
    return this.http.get<any>(this.url);
  }
  getRestaurantById(rid:number):Observable<Restaurant> 
  { 
    return this.http.get<Restaurant>(this.url+'/'+rid); 
  }
  addRestaurant(restaurant:Restaurant):Observable<Restaurant> 
  { 
    restaurant['id'] = restaurant.rid; 
    return this.http.post<Restaurant>(this.url, restaurant).pipe(
      tap(() => this.router.navigate(['/restaurants']))
    ); 
  }
  updateRestaurant(restaurant:Restaurant):Observable<Restaurant> 
  { 
    return this.http.put<Restaurant>(this.url+'/'+restaurant.rid, restaurant); 
  } 
  deleteRestaurant(rid:number){ 
    return this.http.delete(this.url+'/'+rid); 
  } 
}

