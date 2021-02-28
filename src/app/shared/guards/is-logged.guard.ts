import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate() {
    const logged = this.authService.isLogged();
    if (logged) return true;

    this.router.navigate(['login']);
    return false;
  }
}
