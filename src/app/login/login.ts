import { Component, output } from '@angular/core';
import { LoginUi } from '@ui/login-ui/login-ui';

@Component({
  selector: 'app-login',
  imports: [LoginUi],
  templateUrl: './login.html',
})
export class Login {
  login(ev: string) {
    console.log('Login with', ev);
  }
}
