import React from 'react';

type TProps = {
  items: string[];
};

function Spec({ items }: TProps) {
  return (
    <p className="mt-1">
      {items.map((item, i) => (
        <span key={i} className="py-1 px-2 mr-1 text-xs rounded bg-gray-200">{item}</span>
      ))}
    </p>
  );
}

export default Spec;
