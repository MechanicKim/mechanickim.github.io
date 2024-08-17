import React from 'react';
import '../index.css';

import Header from './Header';
import Articles from './articles/Articles';

function App() {
  return (
    <main className="w-screen h-screen flex flex-col">
      <Header title="Daily Log" />
      <Articles />
    </main>
  )
}

export default App;
