import { Component, inject } from '@angular/core';
import { LoginUi } from '@ui/login-ui/login-ui';
import { AuthService } from '@services/auth.service';


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
