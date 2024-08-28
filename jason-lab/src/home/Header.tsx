import React from 'react';

type TProps = {
  title: string;
  width: string;
};

function Header({ title, width }: TProps) {
  return (
    <header className="mx-auto" style={{ width }}>
      <h4 className="p-3 text-gray-900 font-semibold text-lg text-center">{title}</h4>
    </header>
  );
}

export default Header;
