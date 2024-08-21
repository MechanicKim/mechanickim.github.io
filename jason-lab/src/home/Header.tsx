import React from 'react';

type TProps = {
  title: string;
};

function Header({ title }: TProps) {
  return (
    <header className="mx-auto" style={{ width: '800px' }}>
      <h4 className="p-3 text-gray-900 font-semibold text-lg text-center">{title}</h4>
    </header>
  );
}

export default Header;
