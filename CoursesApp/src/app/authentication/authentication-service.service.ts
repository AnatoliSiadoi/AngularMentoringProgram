import { Injectable } from '@angular/core';
import { IUser } from './../Interfaces/iuser';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private users: IUser[];
  private currentUser: IUser;
  private isUserExist:boolean = false;

  constructor() {
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

   login(user: IUser): void {
    if (this.users.some(item => {
      item.login === user.login && 
      item.password === user.password
    })) {
      localStorage.setItem('userInfo', JSON.stringify(this.users.filter(item => {
        item.login === user.login &&
        item.password === user.password 
      })[0]));
      localStorage.setItem('token', 'Super secret token');
    }
  }

  logout(): void {
    console.log(localStorage.getItem('userInfo'));
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return !(localStorage.getItem('token') === null);
  };

  getUserInfo(): IUser {
    if (this.isAuthenticated()) {
      return JSON.parse(localStorage.getItem('userInfo'));
    } else 
    {
      return null;
    }
  }

}
