import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import LoggedUser from '../interfaces/loggedUser.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  loggedUser: LoggedUser;

  setUser(user: LoggedUser) {
    this.loggedUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.loggedUser) return this.loggedUser;

    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
  }

  isLogged(): boolean {
    return !!this.getUser();
  }

  logout(): void {
    this.loggedUser = null;

    localStorage.clear();

    this.router.navigate(['login']);
  }
}
