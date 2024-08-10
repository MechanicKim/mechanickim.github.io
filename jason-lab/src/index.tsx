import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { redirectTo } from './util/url';

const params = new URL(window.location.href).searchParams;

const to = params.get('to');
if (to) {
  redirectTo(to);
} else {
  const domNode = document.getElementById('root');
  if (domNode) {
    const root = createRoot(domNode);
    root.render(<App />);
  }
}
