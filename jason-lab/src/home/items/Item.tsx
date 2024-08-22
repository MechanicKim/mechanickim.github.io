import React from 'react';

import Spec from './Spec';



type TProps = {
  title: string;
  img: string;
  desc: string;
  specs: string[];
  LinkIcon: React.JSX.Element;
};

function Item({ title, img, desc, specs, LinkIcon }: TProps) {
  return (
    <div className="p-3 flex border-y">
      <img className="w-60 h-48 object-cover" src={img} />
      <div className="px-3 flex-1 flex flex-col">
        <h4 className="font-semibold text-xl text-gray-900">{title}</h4>
        <Spec items={specs} />
        <p className="mt-2 flex-1 text-gray-800">
          {desc}
        </p>
        <p className="flex justify-end">
          {LinkIcon}
        </p>
      </div>
    </div>
  );
}

export default Item;
