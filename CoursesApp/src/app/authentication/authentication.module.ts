import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

const authenticationRoutes: Routes =[
  { path: 'login', component: LoginComponentComponent }
];

@NgModule({
  declarations: [LoginComponentComponent, RegisterComponentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(authenticationRoutes)
  ],
  exports: [LoginComponentComponent, RegisterComponentComponent],
})
export class AuthenticationModule { }
