import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/login/login').then((m) => m.Login),
    canActivate: [guestGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./screens/dashboard/dashboard').then((m) => m.Dashboard),
    canActivate: [authGuard],
  },
];
