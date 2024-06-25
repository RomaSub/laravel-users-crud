import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import '../../lang/i18n';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layouts/Layout';
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN_PUBLIC,
});

createInertiaApp({
  title: title => (title ? `${title} - Crud App` : 'Crud App'),
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
    const page = pages[`./Pages/Users/${name}.tsx`];
    page.default.layout =
      page.default.layout || (page => <Layout>{page}</Layout>);
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#fff',
    showSpinner: true
  }
});
