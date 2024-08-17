import React from 'react';
import UAParser from 'ua-parser-js';

import { topMenuList } from './data';

function FooterP() {
  return (
    <></>
  );
}

function FooterM() {
  return (
    <ul className="flex">
    {topMenuList.map(({ id, title, url }) => (
      <li className="flex-1" key={id}>
        <a
          className="py-5 block text-xs text-center"
          href={url}
          style={{ color: 'rgb(79, 79, 79, 0.7)' }}
        >
          {title}
        </a>
      </li>
    ))}
    </ul>
  );
}

function Footer() {
  const ua = new UAParser();
  const { type } = ua.getDevice();

  return type === 'mobile' ? <FooterM /> : <FooterP />;
}

export default Footer;
