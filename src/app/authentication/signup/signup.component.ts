import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RegisterService} from '../../core/service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  registerData:any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private registerService:RegisterService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['', Validators.required],

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.authForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      this.registerData ={
        "phoneNumber":this.authForm.value['phoneNumber'],
        "password":this.authForm.value['password'],
        "typeOfUser":'Vendor',
        "application":'DevicePe',
        "firstName":this.authForm.value['firstName'],
        "lastName":this.authForm.value['lastName'],
        "middleName":this.authForm.value['middleName']
      }
      //  this.authForm.value;
      // this.registerData['typeOfUser'] = 'Vendor';
      // this.registerData['application'] = 'DevicePe';
      console.log(this.registerData);
      this.registerService.register(this.registerData).subscribe(data => {

        console.log(data.savedId);
        this.registerService.setSavedId(data.savedId);
        this.openSnackBar('Registered Successfully');
        this.router.navigate(['/authentication/otp']);
      }, err => {

        console.log(err);
      });

      //this.router.navigate(['/admin/dashboard/main']);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 2000
    });
  }
}
