import React, { useState } from 'react';
import UAParser from 'ua-parser-js';

type TProps = {
  img: string;
  url: string;
  title: string;
  desc: string;
};

function ArticleP({ img, url, title, desc }: TProps) {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  if (error) {
    return (
      <article className="m-1 p-3 h-60 w-80 border border-slate-200 border-opacity-30">
        <a className="mb-2 block font-semibold text-lg text-slate-50 hover:underline" href={url} target="_blank">{title}</a>
        <p className="text-slate-100">{desc}</p>
      </article>
    );
  }

  return (
    <article className="m-1 h-60 relative">
      <img className="h-60" src={img} onError={onError} />
      <div className="p-3 absolute left-0 top-0 w-full h-full bg-black opacity-0 hover:opacity-75">
        <a className="mb-2 block font-semibold text-lg text-slate-50 hover:underline" href={url} target="_blank">{title}</a>
        <p className="text-slate-100">{desc}</p>
      </div>
    </article>
  );
}

function ArticleM({ img, url, title, desc }: TProps) {
  const [error, setError] = useState(false);

  const onError = () => {
    setError(true);
  };

  return (
    <article className="my-1 w-full">
      {!error &&  <img className="w-full" src={img} onError={onError} />}
      <div className="p-3">
        <a className="mb-2 block font-semibold text-lg text-slate-50" href={url} target="_blank">{title}</a>
        <p className="text-slate-100">{desc}</p>
      </div>
    </article>
  );
}

export default function Article(props: TProps) {
  const ua = new UAParser();
  const { type } = ua.getDevice();
  return type === 'mobile' ? <ArticleM {...props} /> : <ArticleP {...props} />;
}
