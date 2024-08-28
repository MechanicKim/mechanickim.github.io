import React from 'react';

type TProps = {
  id: string;
  title: string;
  children: React.JSX.Element;
};

function Article({ id, title, children }: TProps) {
  return (
    <article
      id={id}
      className="p-5 border-b"
    >
      <a href={`#${id}`}>
        <h4 className="text-2xl">{title}</h4>
      </a>
      {children}
    </article>
  )
}

export default Article;
