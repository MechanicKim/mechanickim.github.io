import React from 'react';

type TProps = {
  img: string;
  url: string;
  title: string;
  desc: string;
};

function Article({ img, url, title, desc }: TProps) {
  return (
    <article className="m-1 inline-block h-60 relative text-slate-100">
      <img className="h-60" src={img} />
      <div className="p-3 absolute left-0 top-0 w-full h-full bg-slate-900 opacity-0 hover:opacity-90">
        <a className="mb-2 block font-semibold text-lg hover:underline" href={url} target="_blank">{title}</a>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default Article;
