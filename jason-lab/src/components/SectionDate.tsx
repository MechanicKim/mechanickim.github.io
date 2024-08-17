import React from 'react';

type TProps = {
  date: string;
};

function SectionDate({ date }: TProps) {
  return (
    <h4 className="mb-2 text-slate-100 font-semibold">{date}</h4>
  );
}

export default SectionDate;
