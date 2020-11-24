import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication-service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  loginForm;

  constructor(private authenticationService: AuthenticationService) 
  {
    this.loginForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {}

  submit() {
    if ( this.loginForm.invalid ) {
      return;
    }
    console.log(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value);
  }

}
