import React from 'react';
import UAParser from 'ua-parser-js';

import { topMenuList } from './data';

function HeaderP() {
  return (
    <header className="w-full flex bg-white">
      <a className="p-4">
        <img className="w-24" src="https://cdn.imweb.me/thumbnail/20240117/5bcb6166e8a98.png" />
      </a>
      <ul className="flex flex-1">
      {topMenuList.map(({ id, title, url }) => (
        <li className="flex-1" key={id}>
          <a
            className="h-full flex items-center justify-center opacity-70 hover:opacity-100"
            href={url}
            style={{ color: 'rgb(79, 79, 79)' }}
          >
            {title}
          </a>
        </li>
      ))}
      </ul>
    </header>
  );
}

function HeaderM() {
  return (
    <header className="p-3 bg-white">
      <img className="w-16" src="https://cdn.imweb.me/thumbnail/20240117/5bcb6166e8a98.png" />
    </header>
  );
}

function Header() {
  const ua = new UAParser();
  const { type } = ua.getDevice();

  return type === 'mobile' ? <HeaderM /> : <HeaderP />;
}

export default Header;
