import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public userLoginName: string;
  public isAuthenticated: boolean;

  constructor (private authenticationService: AuthenticationService, private router: Router) 
  {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
    var currentUser = this.authenticationService.getUserInfo();
    this.userLoginName = currentUser === null ? 'User login name!' :
    `Hello ${currentUser.firstName} ${currentUser.lastName}`;
  }

  Logout(): void {
    if(this.authenticationService.logout())
    {
      this.userLoginName = 'User login name!';
      this.isAuthenticated = this.authenticationService.isAuthenticated();
    }
  }

  Login(pageRoute:string): void {
    this.router.navigate([pageRoute]);
  }

}
