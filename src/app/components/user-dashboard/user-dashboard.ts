import { Component } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-user-dashboard',
  imports: [],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
})
export class UserDashboard {

constructor(private authService: Auth) {}

logout() {


    this.authService.logout();
  

}
}