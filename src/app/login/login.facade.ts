import { Injectable } from '@angular/core';
import { app } from '@services/firebase';
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
  Auth,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    return signInWithRedirect(auth, provider);
  }

  loginWithGithub(): Promise<void> {
    const provider = new GithubAuthProvider();
    const auth = getAuth(app);
    return signInWithRedirect(auth, provider);
  }

  logout(): Promise<void> {
    const auth = getAuth(app);
    return signOut(auth);
  }

  authState(cb: NextOrObserver<User | null>, error: ErrorFn): Unsubscribe {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, cb, error);
  }

  getUser(): Auth {
    const auth = getAuth(app);
    return auth;
  }
}
