import { Component, OnDestroy, OnInit, output, signal } from '@angular/core';
import { LucideAngularModule, Moon, Sun } from 'lucide-angular';

@Component({
  selector: 'app-theme-switch',
  imports: [LucideAngularModule],
  templateUrl: './theme-switch.html',
})
export class ThemeSwitch implements OnInit, OnDestroy {
  isDark = signal(false);

  readonly Moon = Moon;
  readonly Sun = Sun;

  private observer: MutationObserver | undefined;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    this.checkTheme();
    this.observer = new MutationObserver(() => this.checkTheme());
    this.observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  switchTheme() {
    document.documentElement.classList.toggle('dark');
  }

  private checkTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    this.isDark.set(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
