import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeSwitch } from '@ui/theme-switch/theme-switch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSwitch],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-app');
}
