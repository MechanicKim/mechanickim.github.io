import React from 'react';
import UAParser from 'ua-parser-js';

type TProps = {
  img: string;
  url: string;
  title: string;
  desc: string;
};

function ArticleP({ img, url, title, desc }: TProps) {
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

function ArticleM({ img, url, title, desc }: TProps) {
  return (
    <article className="my-1 inline-block w-full text-slate-100">
      <img className="w-full" src={img} />
      <div className="p-3 text-slate-100">
        <a className="mb-2 block font-semibold text-lg hover:underline" href={url} target="_blank">{title}</a>
        <p>{desc}</p>
      </div>
    </article>
  );
}

export default function Article(props: TProps) {
  const ua = new UAParser();
  const { type } = ua.getDevice();
  return type === 'mobile' ? <ArticleM {...props} /> : <ArticleP {...props} />;
}
