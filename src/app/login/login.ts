import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
})
export class Login {
  loginWithGithub() {
    console.log('Login with Github');
  }
}
