import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }
  // adminSet() {
  //   this.authForm.get('username').setValue('admin@school.org');
  //   this.authForm.get('password').setValue('admin@123');
  // }
  // teacherSet() {
  //   this.authForm.get('username').setValue('teacher@school.org');
  //   this.authForm.get('password').setValue('teacher@123');
  // }
  // studentSet() {
  //   this.authForm.get('username').setValue('student@school.org');
  //   this.authForm.get('password').setValue('student@123');
  // }
  onSubmit() {
  
    this.submitted = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {

      // this.authService.signin(this.f.username.value, this.f.password.value).subscribe(data => {
      
      // });
      this.authService
        .login(this.f.username.value, this.f.password.value)
        .subscribe(
          (res) => {
            if (res) {
              console.log("Auth",res)
              const role = this.authService.currentUserValue.role;
              if (role === Role.All || role === Role.Admin || role===Role.Vendor) {
                this.router.navigate(['/admin/dashboard']);
                //this.router.navigate(['/extra-pages/blank']);
               } else if (role === Role.Teacher) {
                 this.router.navigate(['/teacher/dashboard']);
               } else if (role === Role.Student) {
                 this.router.navigate(['/student/dashboard']);
              } else {
                this.router.navigate(['/authentication/signin']);
               }
            } else {
              this.openSnackBar('Some thing went wrong please try again')
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.openSnackBar('Invalid Username or Password !! Please try again')
            this.error = error;
            this.submitted = false;
          }
        );
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 10000
    });
  }
}
