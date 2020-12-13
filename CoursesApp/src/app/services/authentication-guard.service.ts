import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './../authentication/authentication-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService,
     public router: Router) { }

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    } else return true;
  }

}
