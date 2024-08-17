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
      <article className="my-1">
        <a className="mb-2 block font-semibold text-lg text-slate-800 hover:underline" href={url} target="_blank">{title}</a>
        <p className="text-slate-800">{desc}</p>
      </article>
    );
  }

  return (
    <article className="my-1 flex">
      <img className="h-56 w-72 object-cover" src={img} onError={onError} />
      <div className="ml-2 flex-1">
        <a className="mb-2 block font-semibold text-lg text-slate-800 hover:underline" href={url} target="_blank">{title}</a>
        <p className="text-slate-800">{desc}</p>
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
      <div>
        <a className="my-2 block font-semibold text-lg text-slate-800" href={url} target="_blank">{title}</a>
        <p className="text-slate-800">{desc}</p>
      </div>
    </article>
  );
}

export default function Article(props: TProps) {
  const ua = new UAParser();
  const { type } = ua.getDevice();
  return type === 'mobile' ? <ArticleM {...props} /> : <ArticleP {...props} />;
}
