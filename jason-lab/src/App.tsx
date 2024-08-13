import React from 'react';
import './index.css';

import Articles from './articles/Articles';

function App() {
  return (
    <>
      <header>
        <h4 className="p-3 text-slate-100 font-semibold">Daily Log</h4>
      </header>
      <main className="p-3">
        <Articles />
      </main>
    </>
  )
}

export default App;
