import React from 'react';
import '../index.css';

import Header from './Header';
import Item from './items/Item';

import img1 from './imgs/project1.png';

function App() {
  return (
    <main className="w-screen h-screen">
      <Header title="안녕하세요!" />
      <section className="mx-auto" style={{ width: '800px' }}>
        <Item
          title="광고 없이 깔끔한 오늘의 뉴스"
          img={img1}
          desc="RSS 뉴스피드로 목록을 불러옵니다. 기사를 클릭하면 본문을 가져와 보여줍니다. 광고 없이 기사 내용에 집중하고 싶은 분들을 위한 데스크톱 앱"
        />
      </section>
    </main>
  )
}

export default App;
