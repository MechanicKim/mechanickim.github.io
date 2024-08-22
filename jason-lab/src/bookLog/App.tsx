import React, { useState } from 'react';
import '../index.css';

import Header from './Header';
import NavMenuList from './NavMenuList';
import BookLink from './BookLink';

import { bookList } from './data';

function App() {
  const [selectedBook, setSelectedBook] = useState(bookList[0]);

  return (
    <main className="w-screen h-screen flex flex-col">
      <Header title="지혜를 채우는 공간" />
      <div className="flex flex-1 overflow-y-auto">
        <NavMenuList bookList={bookList} selectBook={setSelectedBook} selectedBookID={selectedBook.id} />
        <div className="flex-1 overflow-y-auto relative" style={{ fontFamily: 'Gowun Batang, serif' }}>
          <selectedBook.Articles />
          <BookLink book={selectedBook} />
        </div>
      </div>
    </main>
  )
}

export default App;
