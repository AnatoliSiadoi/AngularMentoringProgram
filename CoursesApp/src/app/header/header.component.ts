import { selectCurrentUser, selectisAuthenticated } from './../store/selectors/user.selectors';
import { IAuthenticationState } from './../store/reducers/authentication.reducer';
import { logoutAuthentications } from './../store/actions/authentication.actions';
import { Component, OnInit } from '@angular/core';
import { IUserInfoResponse } from './../Interfaces/iuser-info-response';
import { AuthenticationService } from './../authentication/authentication-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store'
import { IUser } from './../Interfaces/IUser'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public currentUser$: Observable<IUser> = this.store$.pipe(select(selectCurrentUser));
  public isAuth$: Observable<boolean> = this.store$.pipe(select(selectisAuthenticated));

  constructor(private store$: Store<IAuthenticationState>, private router: Router) { }

  ngOnInit(): void {}

  Logout(): void {
    this.store$.dispatch(logoutAuthentications());   
  }

  Login(pageRoute:string): void {
    this.router.navigate([pageRoute]);
  }
}
