import React from 'react';

type TProps = {
  title: string;
};

function Header({ title }: TProps) {
  return (
    <header>
      <h4 className="p-3 text-slate-950 font-semibold text-lg text-center">{title}</h4>
    </header>
  );
}

export default Header;
