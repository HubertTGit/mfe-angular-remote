import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
})
export class Home {
  loginWithGithub() {
    console.log('Login with Github');
  }
}
