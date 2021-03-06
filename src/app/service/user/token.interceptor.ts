import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public authenticationService: AuthenticationService
  ) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    if (this.authenticationService.isAuthenticated()) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem("token")
        }
      });
    }
    return next.handle(request);
  }
}
