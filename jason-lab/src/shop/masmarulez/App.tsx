import React from 'react';
import '../../index.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <>
      <main className="absolute w-full h-full flex flex-col">
        <Header />
        <Body />
        <Footer />
      </main>
    </>
  )
}

export default App;