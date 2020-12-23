import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../authentication/authentication-service.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService,
     public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['login']);
      return of(false);
    } else return of(true);
  }

}
