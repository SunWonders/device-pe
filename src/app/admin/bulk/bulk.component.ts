import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { BulkService } from '../../core/service/bulk.service';
import { FileValidator } from 'ngx-material-file-input';

@Component({
  selector: 'app-bulk',
  templateUrl: './bulk.component.html',
  styleUrls: ['./bulk.component.sass']
})
export class BulkComponent implements OnInit {
  durationInSeconds = 5;
  bulkForm: FormGroup;

  readonly maxSize = 104857600;
 
  loading: boolean = false; // Flag variable
  file: File = null;
  uploadText: string;

  constructor(private bulkUploadService: BulkService, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.uploadText = "Upload";
    this.bulkForm = this.formBuilder.group({
  
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      uploadedFile: [
        undefined,
        [Validators.required, FileValidator.maxContentSize(this.maxSize)]
      ]
     
    });
  }
  get f() {
    return this.bulkForm.controls;
  }
  // On file Select
  onChange(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    if (this.bulkForm.invalid) {
      return;
    } else {
      this.loading = !this.loading;
     //console.log(this.bulkForm.value['uploadedFile']['_files'][0]);
      this.uploadText = "Uploading...";

      this.bulkUploadService.upload(this.bulkForm.value['uploadedFile']['_files'][0],this.bulkForm.value['email'], "Mobile").subscribe(
        (event: any) => {
          this.uploadText = "Upload"
          if (typeof (event) === 'object') {
            this.openSnackBar('File Uploaded Successfully !!, You Will be Notified via email once process completes')
            //console.log("File Uploaded", event)
            this.loading = false; // Flag variable 
          }
        }
      );
    }
    
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000
    });
  }

}
