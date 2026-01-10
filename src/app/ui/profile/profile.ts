import { Component, input, inject, signal, ElementRef, HostListener } from '@angular/core';
import { User } from '@angular/fire/auth';
import { LoginFacade } from '../../screens/login/login.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
})
export class Profile {
  private loginFacade = inject(LoginFacade);
  private elementRef = inject(ElementRef);

  user = input<User | null>(null);
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  logout() {
    this.loginFacade.logout();
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}
