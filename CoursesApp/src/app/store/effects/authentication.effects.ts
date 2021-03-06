import { LoadingBlockComponent } from './../../loading-block/loading-block.component';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as actions from './../actions/authentication.actions';
import { of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthenticationState } from './../reducers/authentication.reducer';
import { AuthenticationService } from './../../authentication/authentication-service.service';
import { logoutSuccessAuthentications, loginSuccessAuthentications, setUpCurrentUserAuthentications } from './../actions/authentication.actions';

@Injectable()
export class AuthenticationEffects {

  constructor (
    private actions$: Actions,
    private router: Router,
    private authenticationService: AuthenticationService,
    private store: Store<IAuthenticationState>
  ) { }

  @Effect()
  login$ = this.actions$.pipe(ofType(actions.loginAuthentications),
    map(action => of(this.authenticationService.login(action)
      .subscribe( data => {
        this.authenticationService.setToken(data.token);
        this.authenticationService.getUserInfo()
          .subscribe(user => this.store.dispatch(setUpCurrentUserAuthentications(user)));
        this.router.navigate(['/courses']);
      }))),
    concatMap(() => of(loginSuccessAuthentications())));

  @Effect()
  logout$ = this.actions$.pipe(ofType(actions.logoutAuthentications),
    map(() => of(this.authenticationService.logout())),
    concatMap(() => of(logoutSuccessAuthentications()))
  );
}
