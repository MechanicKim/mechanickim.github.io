import React from 'react';
import '../index.css';

import Header from '../components/Header';
import Articles from './articles/Articles';

function App() {
  return (
    <>
      <Header title="Daily Log" />
      <main className="p-3">
        <Articles />
      </main>
    </>
  )
}

export default App;
