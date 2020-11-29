import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../authentication/authentication-service.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs = 'Courses';
  public isAuthenticated: boolean;

  constructor(private authenticationService: AuthenticationService) 
  {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

}
