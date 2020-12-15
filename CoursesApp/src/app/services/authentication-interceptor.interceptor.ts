import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../authentication/authentication-service.service';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authenticationService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authenticationService.getToken()
        }
      });
    }

    return next
      .handle(request)
      .pipe(catchError(this.handleError.bind(this)));
  }

  private handleError( error: HttpErrorResponse ): void {
    console.log(error.message);
    this.authenticationService.logout();
  }
}
