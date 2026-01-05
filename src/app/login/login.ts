import { Component, output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
})
export class Login {
  onLogin = output<string>();

  loginWithGithub() {
    this.onLogin.emit('github');
  }
}
