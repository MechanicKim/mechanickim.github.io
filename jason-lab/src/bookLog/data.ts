import React from 'react';
import Articles1 from './articles/Articles1';

export interface IBook {
  id: string;
  title: string;
  url: string;
  imgSrc: string;
  Articles: () => React.JSX.Element;
}

export const bookList: IBook[] = [
  {
    id: 'b1',
    title: '돈의 속성',
    url: 'https://search.shopping.naver.com/book/catalog/32440930635?query=%EB%8F%88%EC%9D%98%20%EC%86%8D%EC%84%B1&NaPm=ct%3Dm04vaf2g%7Cci%3D5a0df3252ffac10d28c9c4e5d5ab8d4d4afd03a9%7Ctr%3Dboksl%7Csn%3D95694%7Chk%3D96555f6391c0f640c9bf911a88dafb390218f4dd',
    imgSrc: 'https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg?type=w300',
    Articles: Articles1,
  },
];
