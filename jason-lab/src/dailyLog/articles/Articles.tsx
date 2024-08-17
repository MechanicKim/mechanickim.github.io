import React from 'react';
import Section20240813 from './20240813/Section';
import Section20240814 from './20240814/Section';

function Articles() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Section20240814 />
      <Section20240813 />
    </div>
  );
}

export default Articles;
