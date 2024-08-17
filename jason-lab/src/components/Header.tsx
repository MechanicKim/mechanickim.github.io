import React from 'react';

type TProps = {
  title: string;
};

function Header({ title }: TProps) {
  return (
    <header>
      <h4 className="p-3 text-slate-100 font-semibold">{title}</h4>
    </header>
  );
}

export default Header;
