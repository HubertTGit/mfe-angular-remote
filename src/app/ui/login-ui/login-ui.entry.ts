import '@styles/styles.css';

import { createApplication } from '@angular/platform-browser';
import { LoginUi } from './login-ui';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { createCustomElement } from '@angular/elements';

const mount = async () => {
  await createApplication({
    providers: [provideBrowserGlobalErrorListeners()],
  }).then((appRef) => {
    const loginUiElement = createCustomElement(LoginUi, {
      injector: appRef.injector,
    });
    customElements.define('login-ui', loginUiElement);

    return () => appRef.destroy();
  });
};

export { mount };
