import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // [x: string]: any;
  user = new User();
  msg = '';
  loginCompleted: boolean = false;

  constructor(
    private _service: RegistrationService,
    private _router: Router,
    private cookie: CookieService
  ) {
    if (cookie.get('remember') !== undefined) {
      if (cookie.get('remember') !== 'Yes') {
        // this.loginCompleted.email=this.cookie.get('email');
        // this.remember=true;
      }
    }
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user) {
      this._router.navigate(['/loginsuccess']);
    }
  }

  sendUserName(username: string): void {
    // console.log(username);
    this._service.sendUserName(username);
  }
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      (data) => {
        console.log('response received');
        // this.notificationService.success('submitter');
        this.sendUserName(data.username);
        this._router.navigate(['/loginsuccess']);
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'wrong credentials';
      }
    );
  }

  gotoregistration() {
    this._router.navigate(['/registration']);
  }
}
