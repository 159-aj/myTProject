import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from './loginsuccess/loginsuccess.component';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  subject: any;

  constructor(private _http: HttpClient) {}

  predictionUrl: string = 'http://127.0.0.1:5000/crackDetection';
  welcomeurl: string = 'http://127.0.0.1:5000/welcome';

  getPrediction(file: any) {
    let formData = new FormData();
    formData.append('file', file);
    return this._http.post<any>(this.predictionUrl, formData);
  }
  postPredictionData(responseData: any) {
    return this._http.post<any>('http://localhost:8080/postLogs', responseData);
  }

  getPreviousPredications(id: string) {
    return this._http.get<Result[]>(`http://localhost:8080/getlogs/${id}`);
  }
  welcome() {
    return this._http.get<any>(this.welcomeurl);
  }

  sendUserName(userName: string): void {
    console.log(userName);
    localStorage.setItem('user', userName);
  }

  sendUserId(id: number): void {
    console.log(id);
    localStorage.setItem('id', id.toString());
  }

  getUserId(): string | null {
    return localStorage.getItem('id');
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
