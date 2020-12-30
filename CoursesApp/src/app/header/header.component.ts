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

  public currentUser: string;
  public isAuthenticated: boolean;

  public currentUser$: Observable<IUser> = this.store$.pipe(select(selectCurrentUser));
  public isAuth$: Observable<boolean> = this.store$.pipe(select(selectisAuthenticated));

  constructor (private store$: Store<IAuthenticationState>,public authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();

    if(this.isAuthenticated)
    {
      this.authenticationService.getUserInfo()
      .subscribe(userInfo => this.currentUser = `Hello ${ userInfo.name.first } ${ userInfo.name.last }`);
    }
  }

  Logout(): void {
    this.store$.dispatch(logoutAuthentications());   
    this.isAuthenticated = false;
  }

  Login(pageRoute:string): void {
    this.router.navigate([pageRoute]);
  }

}
