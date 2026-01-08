import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-login-ui',
  imports: [],
  templateUrl: './login-ui.html',
})
export class LoginUi {
  onLogin = output<string>();
  name = input<string>('Michael');
  isLoading = input<boolean>(false);

  loginWithGithub() {
    this.onLogin.emit('github');
  }
}
