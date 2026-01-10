import { Component, importProvidersFrom, inject, OnDestroy, OnInit, output } from '@angular/core';
import { LoginUi } from '@ui/login-ui/login-ui';
import { LoginFacade } from './login.facade';
import { Unsubscribe, User } from 'firebase/auth';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { firebaseConfig } from '@services/firebase';
import { getAuth, provideAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  imports: [LoginUi],
  templateUrl: './login.html',
})
export class Login implements OnInit, OnDestroy {
  private readonly loginFacade = inject(LoginFacade);
  private unsubscribe!: Unsubscribe;

  ngOnInit(): void {
    this.loginFacade
      .userState$()
      .subscribe({
        next: this.loginCB,
        error: this.loginErrorCB,
        complete: () => console.log('complete'),
      });
  }

  login(ev: 'google' | 'github') {
    if (ev === 'google') {
      this.loginFacade.loginWithGoogle();
    }

    if (ev === 'github') {
      this.loginFacade.loginWithGithub();
    }
  }

  private loginCB = (user: User | null) => {
    if (user) {
      console.log(user);
    } else {
      console.log('user not found');
    }
  };

  private loginErrorCB = (error: Error) => {
    console.log(error);
  };

  ngOnDestroy(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
