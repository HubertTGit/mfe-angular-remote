import { inject, Injectable } from '@angular/core';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  ErrorFn,
  Unsubscribe,
  user,
  Auth,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  loginWithGithub(): Promise<UserCredential> {
    const provider = new GithubAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  logout(): void {
    signOut(this.auth);
    this.router.navigate(['/']);
  }

  authStateChangeHandler(cb: NextOrObserver<User | null>, error: ErrorFn): Unsubscribe {
    return onAuthStateChanged(this.auth, cb, error);
  }

  userState$(): Observable<User | null> {
    return user(this.auth);
  }

  getUser(): User | null {
    return this.auth.currentUser;
  }
}
