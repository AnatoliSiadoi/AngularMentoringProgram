import { Injectable } from '@angular/core';
import { IUser } from './../Interfaces/iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private users: IUser[];

  constructor(private router: Router) {
    this.users = [
      {
        id: '1',
        firstName: 'Anatoli',
        lastName: 'Siadoi',
        login: 'ASiadoi',
        password: 'qwerty'
      },
      {
        id: '2',
        firstName: 'Sergey',
        lastName: 'Kuptsov',
        login: 'SKuptsov',
        password: '12345'
      },
      {
        id: '3',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        login: 'IIvanov',
        password: '54321'
      }];
   }

   login(user: IUser): boolean {
     const currentUser = this.users.find( item => {
      return item.login === user.login
        && item.password === user.password;
    });
    
    if (currentUser) {
      localStorage.setItem('userInfo', JSON.stringify(currentUser));
      localStorage.setItem('token', 'Super secret token');
      return true;
    }
    else return false; 
  }

  logout(): boolean {
    console.log(localStorage.getItem('userInfo'));
    localStorage.clear();
    this.router.navigate(['login']);
    return true;
  }

  isAuthenticated(): boolean {
    return !(localStorage.getItem('token') === null);
  };

  getUserInfo(): IUser {
    if (this.isAuthenticated()) {
      return JSON.parse(localStorage.getItem('userInfo'));
    } else return null;
  }

}
