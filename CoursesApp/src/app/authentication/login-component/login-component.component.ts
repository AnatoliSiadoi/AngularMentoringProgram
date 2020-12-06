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

    if(this.authenticationService.login(this.loginForm.value))
    {
      console.log("Login is success");
      this.router.navigate(['courses']);
    }else {
      alert("Incorrect credentials");
      console.log("Login is deny");
    }
  }

}
