import React, { ReactNode } from 'react';
import UAParser from 'ua-parser-js';

function Container({ children }: { children: ReactNode[] }) {
  const ua = new UAParser();
  const { type } = ua.getDevice();

  if (type === 'mobile') {
    return (
      <section className="w-screen mb-5 p-3">{children}</section>
    );
  }

  return (
    <section className="mb-5 mx-auto" style={{ width: '800px' }}>{children}</section>
  );
}

export default Container;
