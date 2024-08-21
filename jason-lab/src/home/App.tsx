import React from 'react';
import '../index.css';

import Item from './items/Item';

import img1 from './imgs/project1.png';

function App() {
  return (
    <main className="w-screen h-screen">
      <section className="mx-auto" style={{ width: '800px' }}>
        <Item title="광고 없이 깔끔한 오늘의 뉴스" img={img1} />
      </section>
    </main>
  )
}

export default App;
