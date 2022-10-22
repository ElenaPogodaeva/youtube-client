import { Injectable } from '@angular/core';
import { UrlTree, Router } from '@angular/router';
import type { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handle();
  }

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.handle();
  }

  handle() {
    const isNavigationAllowed = !!localStorage.getItem('token');
    return isNavigationAllowed || this.router.parseUrl('/auth/sign-in');
  }
}
