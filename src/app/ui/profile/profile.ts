import { Component, input, inject, signal, ElementRef, HostListener, output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
})
export class Profile {
  private elementRef = inject(ElementRef);

  user = input<User | null>(null);
  isMenuOpen = signal(false);
  onLogout = output<void>();

  toggleMenu() {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  logout() {
    this.onLogout.emit();
    this.closeMenu();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}
