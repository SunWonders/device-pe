import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VarientChecklistService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  varientCheckListUrl:string;

  varientCheckListUpdateUrl:string;

  constructor(private http: HttpClient) { 

    this.varientCheckListUrl=environment.varientsCheckListUrl;
    this.varientCheckListUpdateUrl=environment.varientsCheckListUpdateUrl;
  }

  getVarientCheckList(): Observable<any> {
    return this.http.get<any>(this.varientCheckListUrl)
  }
  
  update(data:any):Observable<any>{
    return this.http.put<any>(this.varientCheckListUpdateUrl, data, this.httpOptions);
  }
}
