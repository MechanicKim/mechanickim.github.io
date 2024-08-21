import React from 'react';

import Spec from './Spec';

import githubMark from '../imgs/github-mark.png';

type TProps = {
  title: string;
  img: string;
};

function Item({ title, img }: TProps) {
  return (
    <div className="p-3 flex border-y">
      <img className="w-60 h-48 object-cover" src={img} />
      <div className="px-3 flex-1 flex flex-col">
        <h4 className="font-semibold text-xl text-gray-900">{title}</h4>
        <Spec items={['Electron', 'React', 'Typescript', 'Tailwind']} />
        <p className="mt-2 flex-1 text-gray-800">
          RSS 뉴스피드로 목록을 불러옵니다. 기사를 클릭하면 본문을 가져와 보여줍니다. 광고 없이 기사 내용에 집중하고 싶은 분들을 위한 앱
        </p>
        <p className="flex justify-end">
          <a href="https://github.com/MechanicKim/rss-news-reader/tree/main" target="_blank">
            <img className="w-6" src={githubMark} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Item;
