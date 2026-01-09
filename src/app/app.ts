import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ThemeSwitch } from '@ui/theme-switch/theme-switch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ThemeSwitch],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
}
