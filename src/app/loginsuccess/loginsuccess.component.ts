import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

export interface Result {
  id: number;
  fileName: string;
  response: string;
  date: Date;
}

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css'],
})
export class LoginsuccessComponent implements OnInit {
  user!: string;

  file: any;
  result!: Result[];

  // imageForm: FormGroup;
  // tslint:disable-next-line: variable-name
  constructor(private service_: RegistrationService, private router: Router) {
    const userLogged = this.service_.getUserName();
    if (userLogged) {
      this.user = userLogged;
    } else {
      this.router.navigate(['/login']);
    }
    this.result = [];
  }

  ngOnInit(): void {
    // console.log(this.user);
    let userId = this.service_.getUserId();
    console.log(userId);
    if (userId)
      this.service_.getPreviousPredications(userId).subscribe((data) => {
        let gotResult: Result[] = [];
        data.forEach((result) => {
          result.date = new Date(+result.date);
          gotResult.push(result);
        });
        this.result = gotResult;
      });
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  handleClick() {
    // document.getElementById('upload-file').click();
  }
  onFileChanged(): void {
    console.log(this.file.name);
    this.service_.getPrediction(this.file).subscribe(
      (data) => {
        console.log(data);
        const responseData = {
          fileName: this.file.name,
          response: data.response,
          date: +new Date(),
          userId: this.service_.getUserId(),
        };
        this.service_
          .postPredictionData(responseData)
          .subscribe((data: Result[]) => {
            let gotResult: Result[] = [];
            data.forEach((result) => {
              result.date = new Date(+result.date);
              gotResult.push(result);
            });
            this.result = gotResult;
          });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  generateResultObject() {}

  addAttachment(event: any): void {
    this.file = event.target.files[0];
  }
}
