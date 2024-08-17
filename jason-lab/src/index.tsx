import React from 'react';
import { createRoot } from 'react-dom/client';

// import App from './dailyLog/App';
// import App from './quest/App';
import App from './shop/masmarulez/App';

const domNode = document.getElementById('root');
if (domNode) {
  const root = createRoot(domNode);
  root.render(<App />);
}
