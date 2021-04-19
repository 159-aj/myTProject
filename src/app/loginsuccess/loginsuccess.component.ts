import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css'],
})
export class LoginsuccessComponent implements OnInit {
  user!: string;
  constructor(private service_: RegistrationService, private router: Router) {
    const userLogged = this.service_.getUserName();
    if (userLogged) {
      this.user = userLogged;
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    // console.log(this.user);
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  handleClick() {
    // document.getElementById('upload-file').click();
  }

  addAttachment(fileInput: any) {
    const fileReaded = fileInput.target.files[0];
    //  handle the rest
  }
}
