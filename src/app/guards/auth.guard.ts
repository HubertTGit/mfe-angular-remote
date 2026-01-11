import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loginFacade = inject(AuthService);

  return loginFacade.userState$().pipe(
    take(1),
    map((user) => {
      if (user) {
        return true;
      }
      return router.createUrlTree(['/']);
    })
  );
};

export const guestGuard: CanActivateFn = () => {
  const router = inject(Router);
  const loginFacade = inject(AuthService);

  return loginFacade.userState$().pipe(
    take(1),
    map((user) => {
      if (!user) {
        return true;
      }
      return router.createUrlTree(['/dashboard']);
    })
  );
};
