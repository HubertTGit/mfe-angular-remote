# Angular Micro-Frontend (MFE)

A modern Angular application architected to serve as both a standalone application and a remote Micro-Frontend (MFE) provider using Module Federation.

## Key Features

- **🚀 Rspack & Rsbuild**: Powered by Rspack for lightning-fast builds and HMR, replacing the traditional Webpack setup.
- **🔄 Mixed Mode**: Runs as a standard Angular Single Page Application (SPA) AND acts as a Remote MFE generator.
- **🎨 Tailwind CSS**: Styling architecture fully built on Tailwind CSS (v4) with CSS variables for dynamic theming.
- **🧩 Module Federation**: exposes features as **Web Components** rather than just Angular components, enabling framework-agnostic usage (can be consumed by React, Vue, Svelte, etc.).
- **📦 Exportable DTS**: Automatically generates TypeScript declaration files (`.d.ts`) for exposed modules to ensure type safety in host applications.

## Technologies

- **Angular 21**: Latest Angular framework features.
- **Module Federation**: Enhanced plugin for robust micro-frontend architecture.
- **@angular/elements**: Custom Element (Web Component) generation for exposed micro-frontends.
- **Tailwind CSS 4**: Utility-first CSS framework.

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or pnpm

### Installation

```bash
npm install
```

### Development Server

Start the application in development mode with HMR:

```bash
npm run start:rspack
```

The application will be available at `http://localhost:4200` (or configured port).
The Remote Entry file for Module Federation will be served at `http://localhost:4200/remoteEntry.js`.

### Production Build

Build the application for production:

```bash
npm run build:rspack
```

Artifacts will be generated in the `dist/` directory.

## Module Federation & Web Components

This remote application exposes specific features as Web Components. This ensures better isolation and compatibility with different host frameworks.

**Exposed Modules:**

| Key | Path | Description |
|-----|------|-------------|
| `./LoginUi` | `./src/app/ui/login-ui/login-ui.entry.ts` | Login Interface Web Component |
| `./ThemeSwitch` | `./src/app/ui/theme-switch/theme-switch.entry.ts` | Theme Switcher Web Component |
| `./ChatUi` | `./src/app/ui/chat-ui/chat-ui.entry.ts` | Chat Interface Web Component |
| `./ProfileUi` | `./src/app/ui/profile/profile.entry.ts` | User Profile Web Component |

Each entry point wraps the Angular component using `@angular/elements` to `createCustomElement` and registers it as a standard Web Component.
