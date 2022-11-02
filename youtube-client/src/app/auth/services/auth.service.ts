import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { startWith, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuth = new Subject<boolean>();

  readonly isAuth$ = this._isAuth.asObservable();

  constructor(private router: Router) {}

  getAuth() {
    const isAuth = !!localStorage.getItem('token');
    return this._isAuth.pipe(startWith(isAuth ?? false));
  }

  login(token: string) {
    this._isAuth.next(true);
    localStorage.setItem('token', token);
    this.router.navigate(['/', 'search']);
  }

  logout() {
    this._isAuth.next(false);
    localStorage.clear();
    this.router.navigate(['/', 'auth', 'sign-in']);
  }
}
