import { Injectable } from '@angular/core';
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  ErrorFn,
  Unsubscribe,
  user,
} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return signInWithRedirect(auth, provider);
  }

  loginWithGithub(): Promise<void> {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    return signInWithRedirect(auth, provider);
  }

  logout(): Promise<void> {
    const auth = getAuth();
    return signOut(auth);
  }

  authStateChangeHandler(cb: NextOrObserver<User | null>, error: ErrorFn): Unsubscribe {
    const auth = getAuth();
    return onAuthStateChanged(auth, cb, error);
  }

  userState$(): Observable<User | null> {
    const auth = getAuth();
    return user(auth);
  }

  getUser(): User | null {
    const auth = getAuth();
    return auth.currentUser;
  }
}
