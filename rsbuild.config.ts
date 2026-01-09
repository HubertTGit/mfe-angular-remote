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
    source: {
      entry: {
        index: './src/main.ts',
      },
    },
    tools: {
      rspack: (config, { appendPlugins }) => {
        // Ensure Angular compilation happens before Module Federation
        config.optimization = config.optimization || {};
        config.optimization.runtimeChunk = false;
        return config;
      },
    },
    plugins: [
      pluginSass(),
      pluginModuleFederation({
        name: 'angularRemote',
        dts: {
          generateTypes: true,
          consumeTypes: true,
          tsConfigPath: './tsconfig.app.json',
        },
        filename: 'remoteEntry.js',
        exposes: {
          './LoginUi': './src/app/ui/login-ui/login-ui.entry.ts',
          './ThemeSwitch': './src/app/ui/theme-switch/theme-switch.entry.ts',
        },
        shared: {
          '@angular/core': { singleton: true, strictVersion: true, eager: true },
          '@angular/common': { singleton: true, strictVersion: true, eager: true },
          '@angular/router': { singleton: true, strictVersion: true, eager: true },
          '@angular/elements': { singleton: true, strictVersion: true, eager: true },
          '@angular/platform-browser': { singleton: true, strictVersion: true, eager: true },
          '@angular/compiler': { singleton: true, strictVersion: true, eager: true },
          'lucide-angular': { singleton: true, strictVersion: true, eager: true },
          'zone.js': { singleton: true, strictVersion: true, eager: true },
        },
      }),
    ],
  },
});
