import { Component, inject, signal, OnInit, effect } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeSwitch } from '@ui/theme-switch/theme-switch';
import { Profile } from '@ui/profile/profile';
import { AuthService } from './services/auth.service';
import { User } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSwitch, Profile, CommonModule],
  templateUrl: './app.html',
})
export class App implements OnInit {
  private loginFacade = inject(AuthService);
  protected readonly user = signal<User | null>(null);
  private router = inject(Router);

  constructor() {
    effect(() => {
      if (this.user()) {
        this.router.navigate(['/chat']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit(): void {
    this.loginFacade.userState$().subscribe({
      next: (user) => this.user.set(user),
      error: (error) => console.error(error),
    });
  }

  onLogout() {
    this.loginFacade.logout();
  }
}
