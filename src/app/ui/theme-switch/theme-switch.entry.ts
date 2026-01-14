
import { createApplication } from '@angular/platform-browser';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ThemeSwitch } from './theme-switch';

const mount = async () => {
  await createApplication({
    providers: [provideBrowserGlobalErrorListeners()],
  }).then((appRef) => {
    const themeSwitchElement = createCustomElement(ThemeSwitch, {
      injector: appRef.injector,
    });
    customElements.define('theme-switch', themeSwitchElement);

    return () => appRef.destroy();
  });
};

export { mount };
