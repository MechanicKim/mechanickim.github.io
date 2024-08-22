import React from 'react';
import { IBook } from './data';

type TProps = {
  book: IBook;
};

function BookLink({ book }: TProps) {
  return (
    <a
      className="fixed right-4 bottom-4 border"
      href={book.url}
      target="_blank"
    >
      <img className="w-32" src={book.imgSrc} />
    </a>
  );
}

export default BookLink;
