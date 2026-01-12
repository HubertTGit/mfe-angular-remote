import { Component, output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.html',
})
export class LoginUi {
  onLogin = output<'google' | 'github'>();

  loginWithGithub() {
    this.onLogin.emit('github');
  }

  loginWithGoogle() {
    this.onLogin.emit('google');
  }
}
