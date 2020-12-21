import { Component, OnInit } from '@angular/core';
import { IUserInfoResponse } from './../Interfaces/iuser-info-response';
import { AuthenticationService } from './../authentication/authentication-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public currentUser$: Observable<IUserInfoResponse>;
  public isAuthenticated: boolean;

  constructor (private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();

    if(this.isAuthenticated)
    {
      this.currentUser$ = this.authenticationService.getUserInfo();
    }
  }

  Logout(): void {
    this.authenticationService.logout();    
    this.isAuthenticated = false;
  }

  Login(pageRoute:string): void {
    this.router.navigate([pageRoute]);
  }

}
