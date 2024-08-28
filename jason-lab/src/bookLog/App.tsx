import React, { useState } from 'react';
import '../index.css';

import Header from './Header';
import NavMenuList from './NavMenuList';
import BookLink from './BookLink';

import { isMobile } from '../home/util';
import { bookList } from './data';

function getFirstBook() {
  const hash = window.location.hash;
  if (!hash) return bookList[0];
  const [id] = hash.split('-');
  if (!id) return bookList[0];
  const fixedID = id.replace('#', '');
  const book = bookList.find((b) => b.id === fixedID);
  return book || bookList[0];
}

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedBook, setSelectedBook] = useState(getFirstBook());
  const mobileFlag = isMobile();

  return (
    <main className="w-screen h-screen flex flex-col">
      <Header title="지혜를 채우는 공간" toggle={toggleMenu} toggleMenu={setToggleMenu} />
      <div className="flex flex-1 overflow-y-auto">
        {toggleMenu && (
          <NavMenuList
            bookList={bookList} 
            selectBook={setSelectedBook} 
            selectedBookID={selectedBook.id}
            isMobile={mobileFlag}
          />
        )}
        <div
          id="article-contianer"
          className="flex-1 overflow-y-auto relative text-gray-900"
          style={{ fontFamily: 'Gowun Batang, serif' }}
        >
        {(mobileFlag && !toggleMenu) && <selectedBook.Articles />}
        {!mobileFlag && (
          <>
            <div className="mx-auto" style={{ width: '600px' }}>
              <selectedBook.Articles />
            </div>
            <BookLink book={selectedBook} />
          </>
        )}
        </div>
      </div>
    </main>
  )
}

export default App;
