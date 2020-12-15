import { ILoginResponse } from './../../Interfaces/ilogin-response';
import { IUserInfoResponse } from './../../Interfaces/iuser-info-response';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) 
  {
    this.loginForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {}

  Submit() {
    if (this.loginForm.invalid){
      return;
    }

    console.log(this.loginForm.value);

    this.authenticationService
      .login(this.loginForm.value)
      .subscribe((response: ILoginResponse) => {
        this.authenticationService.setToken(response.token);
        this.router.navigate(['/courses']);
      });
  }

}
