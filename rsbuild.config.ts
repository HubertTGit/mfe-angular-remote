import { createConfig } from '@ng-rsbuild/plugin-angular';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { pluginSass } from '@rsbuild/plugin-sass';

export default createConfig({
  options: {
    browser: './src/main.ts',
    index: './src/index.html',
    styles: ['./src/styles.scss'],
    tsConfig: './tsconfig.app.json',
  },
  rsbuildConfigOverrides: {
    plugins: [
      pluginSass(),
      pluginModuleFederation({
        name: 'angularRemote',
        dts: false,
        filename: 'remoteEntry.js',
        exposes: {
          './MyAngularElement': './src/main.ts',
          './LoginUi': './src/app/ui/login-ui/login-ui.ts',
          './CommentsInputUi': './src/app/ui/comments-input/comments-input.ts',
        },
        shared: {
          '@angular/core': { singleton: true, strictVersion: true, eager: true },
          '@angular/common': { singleton: true, strictVersion: true, eager: true },
          '@angular/router': { singleton: true, strictVersion: true, eager: true },
          '@angular/elements': { singleton: true, strictVersion: true, eager: true },
        },
      }),
    ],
  },
});
