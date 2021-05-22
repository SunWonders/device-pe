import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  otpValidateUrl:string;
  otpResendUrl:string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient) { 
    this.otpValidateUrl=environment.otpValidateUrl;
    this.otpResendUrl=environment.resendOtpUrl;
  }

  validate(data:any):Observable<any>{
    return this.http.post<any>(this.otpValidateUrl, data, this.httpOptions);
  }

  resend(data:any):Observable<any>{
    return this.http.post<any>(this.otpResendUrl, data, this.httpOptions);
  }
}
