import React from 'react';

type TProps = {
  children: React.JSX.Element;
};

function Paragraph({ children }: TProps) {
  return <p className="mt-3">{children}</p>;
}

export default Paragraph;
