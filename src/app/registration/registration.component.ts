import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:any= new User();
  msg:any='';

  constructor(private _service :RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
      this._router.navigate(['/login'])
      } ,
      error =>{
        console.log("exception occured");
      this.msg=error.error;
      
      }
    )
  }

}
