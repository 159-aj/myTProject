import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  subject: any;
  constructor(private _http: HttpClient) {}

  sendUserName(userName: string): void {
    console.log(userName);
    localStorage.setItem('user', userName);
  }

  public getUserName(): string | null {
    // console.log(this.subject);
    return localStorage.getItem('user');
  }
  public loginUserFromRemote(user: User): Observable<any> {
    return this._http.post<User>('http://localhost:8080/login', user);
  }

  public registerUserFromRemote(user: User): Observable<any> {
    return this._http.post<any>('http://localhost:8080/registeruser', user);
  }

  handleError(error: Response) {
    console.error('ert');
  }
}
