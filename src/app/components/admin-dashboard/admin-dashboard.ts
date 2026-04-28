import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
// 
  constructor(private authService: Auth) {}

  logout() {
    this.authService.logout();
  }


}
