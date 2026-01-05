import { Component, output } from '@angular/core';

@Component({
  selector: 'app-login-ui',
  imports: [],
  templateUrl: './login-ui.html',
})
export class LoginUi {
  onLogin = output<string>();

  loginWithGithub() {
    this.onLogin.emit('github');
  }
}
