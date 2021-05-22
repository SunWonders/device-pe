import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/service/register.service';
import { OtpService } from 'src/app/core/service/otp.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.sass']
})
export class OtpComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  registerData: any;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router, private otpService: OtpService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerData = this.registerService.getRegisterData();
    if (this.registerData != undefined) {
      console.log("Register Data from service", this.registerService.getRegisterData())
      this.authForm = this.formBuilder.group({
        phoneNumber: [this.registerData['phoneNumber'], Validators.required],
        otp: [
          '',
          [Validators.required, Validators.minLength(6)],
        ]
      });
    } else {
      this.router.navigate(['/authentication/signup']);
    }

  }

  resendOtp(){
    console.log("Resend OTP ",)
    let resendOtp = {
      'mobileNumber': this.authForm.value['phoneNumber'],
      "type":"otp",
      "userId":this.registerData['id']
    }
    this.otpService.resend(resendOtp).subscribe(data => {

      console.log(data);
      this.openSnackBar('Otp Resent successfully')
     
    }, err => {

      console.log(err);
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    } else {
      // let registerData=this.authForm.value;
      // registerData['typeOfUser']='Vendor';
      // registerData['application']='DevicePe';
      console.log(this.authForm.value);
      let validateOtpData = {
        'mobileNumber': this.authForm.value['phoneNumber'],
        'otp': this.authForm.value['otp']
      }
      this.otpService.validate(validateOtpData).subscribe(data => {

        if (data.status == 200) {
          this.openSnackBar('Validated Successfully')
        }   else {
          this.openSnackBar(data.message)
        }
        if (data.status != 203) {
          this.router.navigate(['/authentication/signin']);
        }
       
      }, err => {

        console.log(err);
      });
      //this.router.navigate(['/admin/dashboard/main']);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 20000
    });
  }
}
