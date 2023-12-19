import React from 'react';
import { twMerge } from 'tailwind-merge';

interface DescriptionProps {
  className: string;
  children: React.ReactNode;
}

const Description = ({children, className}: DescriptionProps) => {
  const classMerge = twMerge('text-left lg:text-lg xl:text-2xl', className); 
  return (
    <p className={classMerge}>
      {children}
    </p>
  );
};

export default Description;
