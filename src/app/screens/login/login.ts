import { Component, importProvidersFrom, inject, OnDestroy, OnInit, output } from '@angular/core';
import { LoginUi } from '@ui/login-ui/login-ui';
import { AuthService } from '../../services/auth.service';
import { Unsubscribe, User } from 'firebase/auth';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { firebaseConfig } from '@services/firebase';
import { getAuth, provideAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  imports: [LoginUi],
  templateUrl: './login.html',
})
export class Login {
  private readonly loginFacade = inject(AuthService);

  login(ev: 'google' | 'github') {
    if (ev === 'google') {
      this.loginFacade.loginWithGoogle();
    }

    if (ev === 'github') {
      this.loginFacade.loginWithGithub();
    }
  }
}
