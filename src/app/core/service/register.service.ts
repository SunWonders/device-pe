import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUrl: string;

  registerData:any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  setSavedId(id:number){
    this.registerData['id']=id;
  }
  getRegisterData(){
    return this.registerData;
  }

  constructor(private http: HttpClient) {
    this.registerUrl = environment.registerUrl;
  }

  register(data: any): Observable<any> {
    this.registerData=data;
    return this.http.post<any>(this.registerUrl, data, this.httpOptions);
  }
}
