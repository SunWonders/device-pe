import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  modelsUrl:string;

  modelsUpdateUrl:string;

  constructor(private http: HttpClient) { 

    this.modelsUrl=environment.modelsUrl;
    this.modelsUpdateUrl=environment.modelsUpdateUrl;
  }

  getModels(): Observable<any> {
    return this.http.get<any>(this.modelsUrl)
  }
  
  update(data:any):Observable<any>{
    return this.http.put<any>(this.modelsUpdateUrl, data, this.httpOptions);
  }
}
