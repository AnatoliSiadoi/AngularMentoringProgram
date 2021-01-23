import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../authentication/authentication-service.service';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { IAuthenticationState } from './../store/reducers/authentication.reducer';
import { selectisAuthenticated } from './../store/selectors/user.selectors';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuardService implements CanActivate {

  public isAuth$: Observable<boolean> = this.store$.pipe(select(selectisAuthenticated));

  constructor(public authenticationService: AuthenticationService,
    private store$: Store<IAuthenticationState>,
    public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!this.isAuth$) {
      this.router.navigate(['login']);
      return of(false);
    } else return of(true);
  }

}
