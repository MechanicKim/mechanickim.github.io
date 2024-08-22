import React from 'react';

type TProps = {
  title: string;
};

function Header({ title }: TProps) {
  return (
    <header>
      <h4 className="p-3 text-gray-900 font-semibold text-lg border-b">{title}</h4>
    </header>
  );
}

export default Header;
