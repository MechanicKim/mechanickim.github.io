import React, { Dispatch } from 'react';

type TProps = {
  title: string;
  toggle: boolean;
  toggleMenu: Dispatch<React.SetStateAction<boolean>>;
};

function MenuOpen() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
  );
}

function MenuClose() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
    </svg>
  );
}

function Header({ title, toggle, toggleMenu }: TProps) {
  return (
    <header className="flex items-center justify-between border-b">
      <h4 className="p-3 text-gray-900 font-semibold text-lg">{title}</h4>
      <button className="p-3" onClick={() => toggleMenu((prev) => !prev)}>
        {toggle ? <MenuClose /> : <MenuOpen />}
      </button>
    </header>
  );
}

export default Header;
