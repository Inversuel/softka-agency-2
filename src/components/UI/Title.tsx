import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  refProp?: React.MutableRefObject<HTMLHeadingElement | null>;
}

const Title = ({ children, className, refProp }: TitleProps) => {
  const classMerge = twMerge('text-2xl lg:text-4xl xl:text-6xl font-bold font-montserrat', className);
  return <h3 ref={refProp} className={classMerge}>{children}</h3>;
};

export default Title;
