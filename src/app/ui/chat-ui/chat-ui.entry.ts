import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { ChatUi } from './chat-ui';

const mount = async () => {
  await createApplication({
    providers: [provideBrowserGlobalErrorListeners()],
  }).then((appRef) => {
    const chatUiElement = createCustomElement(ChatUi, {
      injector: appRef.injector,
    });
    customElements.define('chat-ui', chatUiElement);

    return () => appRef.destroy();
  });
};

export { mount };
