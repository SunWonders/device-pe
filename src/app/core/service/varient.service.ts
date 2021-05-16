import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VarientService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  varientsUrl:string;

  varientsUpdateUrl:string;

  constructor(private http: HttpClient) { 

    this.varientsUrl=environment.varientsUrl;
    this.varientsUpdateUrl=environment.varientsUpdateUrl;
  }

  getAccessories(): Observable<any> {
    return this.http.get<any>(this.varientsUrl)
  }
  
  update(data:any):Observable<any>{
    return this.http.put<any>(this.varientsUpdateUrl, data, this.httpOptions);
  }
}
