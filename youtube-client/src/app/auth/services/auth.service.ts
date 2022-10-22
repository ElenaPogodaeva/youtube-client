import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login (token: string) {
    localStorage.setItem('token', token);
    this.router.navigate(['/', 'youtube']);
  }

  logout () {
    localStorage.clear();
    this.router.navigate(['/', 'auth', 'sign-in']);
  }
}
