import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private _authService: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: this._authService.createAuthHeaderValue()
      }
    })
    return next.handle(req);
  }

}
