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
      className="px-5 py-6 ml-36 border-b text-gray-900"
      style={{ width: '600px' }}
    >
      <a href={`#${id}`}>
        <h4 className="text-2xl">{title}</h4>
      </a>
      {children}
    </article>
  )
}

export default Article;
