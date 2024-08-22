import React, { Dispatch } from 'react';

import { IBook } from './data';

type TProps = {
  bookList: IBook[];
  selectBook: Dispatch<React.SetStateAction<IBook>>;
  selectedBookID: string;
};

function NavMenuList({ bookList, selectBook, selectedBookID }: TProps) {
  return (
    <nav className="w-72 border-r">
      <ul>
      {bookList.map((book) => {
        const { id, title } = book;
        const selected = id === selectedBookID;

        if (selected) {
          return (
            <li className="border-b bg-gray-100" key={id}>
              <a className="p-3 block cursor-pointer">{title}</a>
            </li>
          );
        } else {
          return (
            <li className="border-b hover:bg-gray-100" key={id}>
              <a className="p-3 block cursor-pointer" onClick={() => selectBook(book)}>{title}</a>
            </li>
          );
        }
      })}
      </ul>
    </nav>
  );
}

export default NavMenuList;
