import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  brandUrl:string;

  brandSaveUrl:string;

  brandUpdateUrl:string;

  constructor(private http: HttpClient) { 

    this.brandUrl=environment.brandUrl;
    this.brandSaveUrl=environment.brandSaveUrl;
    this.brandUpdateUrl=environment.brandUpdateUrl;
  }

  getBrands(): Observable<any> {
    return this.http.get<any>(this.brandUrl)
  }

  save(data:any):Observable<any>{
    return this.http.post<any>(this.brandSaveUrl, data, this.httpOptions);
  }

  update(data:any):Observable<any>{
    return this.http.put<any>(this.brandUpdateUrl, data, this.httpOptions);
  }
}
