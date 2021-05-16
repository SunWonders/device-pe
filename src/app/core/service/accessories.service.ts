import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  accessoriesUrl:string;

  accessoriesUpdateUrl:string;

  constructor(private http: HttpClient) { 

    this.accessoriesUrl=environment.accessoriesUrl;
    this.accessoriesUpdateUrl=environment.accessoriesUpdateUrl;
  }

  getAccessories(): Observable<any> {
    return this.http.get<any>(this.accessoriesUrl)
  }
  
  update(data:any):Observable<any>{
    return this.http.put<any>(this.accessoriesUpdateUrl, data, this.httpOptions);
  }
}
