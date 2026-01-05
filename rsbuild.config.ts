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
        name: 'remote',
        dts: false,
        filename: 'remoteEntry.js',
        exposes: {
          './login-ui': './src/app/ui/login-ui/login-ui.ts',
          './comments-input': './src/app/ui/comments-input/comments-input.ts',
        },
        shared: {
          '@angular/core': { singleton: true, strictVersion: true },
          '@angular/common': { singleton: true, strictVersion: true },
          '@angular/router': { singleton: true, strictVersion: true },
          '@angular/elements': { singleton: true, strictVersion: true },
        },
      }),
    ],
  },
});
