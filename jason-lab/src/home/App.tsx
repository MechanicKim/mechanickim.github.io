import React from 'react';
import '../index.css';

import Header from './Header';
import Item from './items/Item';

import { isMobile } from './util';

import img1 from './imgs/project1.png';
import img2 from './imgs/project2.png';
import img3 from './imgs/project3.png';
import img4 from './imgs/project3.png';
import githubMark from './imgs/github-mark.png';

function App() {
  const width = isMobile() ? '100%' : '800px';

  return (
    <main className="w-screen h-screen">
      <Header title="안녕하세요!" width={width} />
      <section className="mx-auto" style={{ width }}>
        <Item
          title="광고 없이 깔끔한 오늘의 뉴스"
          img={img1}
          desc="RSS 뉴스피드로 목록을 불러옵니다. 기사를 클릭하면 본문을 가져와 보여줍니다. 광고 없이 기사 내용에 집중하고 싶은 분들을 위한 데스크톱 앱"
          specs={['Javascript', 'Electron', 'React', 'Typescript', 'Tailwind']}
          LinkIcon={(
            <a href="https://github.com/MechanicKim/rss-news-reader/tree/main" target="_blank">
              <img className="w-6" src={githubMark} />
            </a>
          )}
        />
        <Item
          title="북 로그"
          img={img2}
          desc="읽고 기록으로 남겨 공유합니다."
          specs={['Javascript', 'React', 'Typescript', 'Tailwind']}
          LinkIcon={(
            <a href="/bookLog" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#111827">
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
              </svg>
            </a>
          )}
        />
        <Item
          title="Next.js + Ollama"
          img={img3}
          desc="Next.js + Ollama 기본 템플릿"
          specs={['Next.js', 'Ollama']}
          LinkIcon={(
            <a href="https://github.com/MechanicKim/nextjs-ollama" target="_blank">
              <img className="w-6" src={githubMark} />
            </a>
          )}
        />
        <Item
          title="템플릿 기반 React 프로젝트 생성"
          img={img4}
          desc="CRA(Create React App)이라는 좋은 툴 있지만 쓰기는 싫고, 직접 바닥부터 구축하자니 부담인 이들을 위한 도구"
          specs={['Javascript', 'React', 'Typescript']}
          LinkIcon={(
            <a href="https://github.com/MechanicKim/react-project-creator" target="_blank">
              <img className="w-6" src={githubMark} />
            </a>
          )}
        />
      </section>
    </main>
  )
}

export default App;
