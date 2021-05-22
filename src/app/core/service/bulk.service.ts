import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BulkService {

  bulkUploadUrl:string;

  constructor(private http: HttpClient) { 
    this.bulkUploadUrl=environment.bulkUploadUrl;
  }


  upload(file:any,emailId:string,type:string):Observable<any> {

    const formData = new FormData(); 
    formData.append("file", file, file.name);
     formData.append("emailId", emailId);
      formData.append("type", type);
    return this.http.post(this.bulkUploadUrl, formData)
}
}
