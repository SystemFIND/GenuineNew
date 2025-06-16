import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx'),
    ),
  setup({ el, App, props }) {
    const root = document.documentElement;
    
    const userDarkMode = props.initialPage.props?.auth?.user?.dark_mode;

    if (userDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (import.meta.env.SSR) {
      hydrateRoot(el, <App {...props} />);
      return;
    }

    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#4B5563',
  },
});
