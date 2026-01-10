import { ApplicationConfig, provideBrowserGlobalErrorListeners, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp, FirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { firebaseConfig } from '@services/firebase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth(inject(FirebaseApp))),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
