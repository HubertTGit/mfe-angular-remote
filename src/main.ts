import 'zone.js';
import { createCustomElement } from '@angular/elements';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { LoginUi } from './app/ui/login-ui/login-ui';
import { CommentsInput } from './app/ui/comments-input/comments-input';
import './styles.scss';

bootstrapApplication(App, appConfig)
  .then((appRef) => {
    const loginUiElement = createCustomElement(LoginUi, {
      injector: appRef.injector,
    });
    customElements.define('login-ui', loginUiElement);

    const commentsInputElement = createCustomElement(CommentsInput, {
      injector: appRef.injector,
    });
    customElements.define('comments-input', commentsInputElement);
  })
  .catch((err) => console.error(err));
