import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { Profile } from './profile';

const mount = async () => {
  await createApplication({
    providers: [provideBrowserGlobalErrorListeners()],
  }).then((appRef) => {
    const profileUIElement = createCustomElement(Profile, {
      injector: appRef.injector,
    });
    customElements.define('profile-ui', profileUIElement);

    return () => appRef.destroy();
  });
};

export { mount };
