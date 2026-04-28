import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./components/admin-dashboard/admin-dashboard').then((m) => m.AdminDashboard),
    canActivate: [AuthGuard],
    data: { role: 'admin' },
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./components/user-dashboard/user-dashboard').then((m) => m.UserDashboard),
    canActivate: [AuthGuard],
    data: { role: 'user' },
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
