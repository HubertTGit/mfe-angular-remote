import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-login-ui',
  imports: [],
  templateUrl: './login-ui.html',
})
export class LoginUi {
  onLogin = output<string>();
  name = input<string>('Jack');

  loginWithGithub() {
    this.onLogin.emit('github');
  }
}
