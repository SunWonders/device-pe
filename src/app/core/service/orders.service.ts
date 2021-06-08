import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  ordersUrl:string;



  constructor(private http: HttpClient) { 

    this.ordersUrl=environment.ordersUrl;
   
  }

  getAllOrders(): Observable<any> {
    return this.http.get<any>(this.ordersUrl)
  }
  

}
