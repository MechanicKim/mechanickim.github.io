import React from 'react';
import UAParser from 'ua-parser-js';

import { homeImgList1, homeImgList2 } from './data';

function BodyP() {
  return (
    <section className="flex-1 overflow-y-auto">
      <div className="flex">
      {homeImgList1.map(({ id, src }) => (
        <div className="flex-1" key={id}>
          <img src={src} />
        </div>
      ))}
      </div>
      <div className="flex">
      {homeImgList2.map(({ id, src }) => (
        <div className="flex-1" key={id}>
          <img src={src} />
        </div>
      ))}
      </div>
    </section>
  );
}

function BodyM() {
  return (
    <section className="flex-1 overflow-y-auto">
      <div className="w-screen overflow-x-auto">
        <div style={{ width: `${homeImgList1.length}00vw` }}>
        {homeImgList1.map(({ id, src }) => (
          <div className="w-screen inline-block" key={id}>
            <img src={src} />
          </div>
        ))}
        </div>
      </div>
      <div className="w-screen overflow-x-auto">
        <div style={{ width: `${homeImgList2.length}00vw` }}>
        {homeImgList2.map(({ id, src }) => (
          <div className="w-screen inline-block" key={id}>
            <img src={src} />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

function Body() {
  const ua = new UAParser();
  const { type } = ua.getDevice();

  return type === 'mobile' ? <BodyM /> : <BodyP />;
}

export default Body;
