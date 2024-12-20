import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuthenticated$.pipe(
      map((isAuthenticated: boolean) => {
        if (!isAuthenticated) {
          this.auth.loginWithRedirect();
          return false;
        }
        return true;
      })
    );
  }
}
