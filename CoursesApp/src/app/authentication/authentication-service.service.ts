import { IUserInfoResponse } from './../Interfaces/iuser-info-response';
import { ILoginResponse } from './../Interfaces/ilogin-response';
import { Injectable } from '@angular/core';
import { IUser } from './../Interfaces/iuser';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private url: string = 'http://localhost:3004';

  constructor(private router: Router, 
    private httpClient: HttpClient) { }

   login(user: IUser): Observable<ILoginResponse> {
      return this.httpClient
        .post<ILoginResponse>( `${ this.url }/auth/login`, {
          login: user.login,
          password: user.password
        })
        .pipe(catchError(this.handleError.bind(this)))
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !(localStorage.getItem('token') === null);
  };

  getUserInfo(): Observable<IUserInfoResponse> {
    return this.httpClient
      .post<IUserInfoResponse>( `${ this.url }/auth/userinfo`, { 
        token: localStorage.getItem('token')
      })
      .pipe(catchError(this.handleError.bind(this)));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
      localStorage.clear();
      localStorage.setItem('token', token);
  }

  private handleError( error: HttpErrorResponse ): void {
    console.log(error.message);
  }
}
