import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-login-ui',
  imports: [],
  templateUrl: './login-ui.html',
})
export class LoginUi {
  onLogin = output<string>();
  isLoading = input<boolean>(false);

  loginWithGithub() {
    this.onLogin.emit('github');
  }
}
