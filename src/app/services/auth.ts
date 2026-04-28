import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private router: Router) {}
   login(role: string) {
    localStorage.setItem('role', role);
  }

  logout() {
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('role');
  }
}
