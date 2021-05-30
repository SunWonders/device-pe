import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileValidator } from 'ngx-material-file-input';
import { FileuploadService } from 'src/app/core/service/fileupload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.sass']
})
export class FileuploadComponent implements OnInit {

  durationInSeconds = 5;
  bulkForm: FormGroup;

  readonly maxSize = 104857600;
 
  loading: boolean = false; // Flag variable
  file: File = null;
  uploadText: string;
  shortUrl: any;

  constructor(private fileUploadService: FileuploadService, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.uploadText = "Upload";
    this.bulkForm = this.formBuilder.group({
  
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

      this.fileUploadService.upload(this.bulkForm.value['uploadedFile']['_files'][0]).subscribe(
        (event: any) => {
        //  console.log("Response ",event);
          this.uploadText = "Upload"
          if (typeof (event) === 'object') {
            this.openSnackBar('File Uploaded Successfully !!')
            this.shortUrl=event.shortUrl;
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
