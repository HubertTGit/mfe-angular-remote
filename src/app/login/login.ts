import { Component, inject, OnDestroy, OnInit, output } from '@angular/core';
import { LoginUi } from '@ui/login-ui/login-ui';
import { LoginFacade } from './login.facade';
import { Unsubscribe, User } from 'firebase/auth';

@Component({
  selector: 'app-login',
  imports: [LoginUi],
  templateUrl: './login.html',
})
export class Login implements OnInit, OnDestroy {
  private readonly loginFacade = inject(LoginFacade);
  private unsubscribe!: Unsubscribe;

  ngOnInit(): void {
    //this.loginFacade.logout();
    console.log(this.loginFacade.getUser());
    // this.unsubscribe = this.loginFacade.authState(this.loginCB, this.loginErrorCB);
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
    this.unsubscribe();
  }
}
