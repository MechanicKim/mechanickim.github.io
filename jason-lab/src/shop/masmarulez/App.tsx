'use client';

import React, { useEffect } from 'react';
import '../../index.css';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  useEffect(() => {
    const title = document.head.querySelector('title');
    if (title) title.innerText = 'Masmarulez [마스마룰즈]';
  }, []);

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