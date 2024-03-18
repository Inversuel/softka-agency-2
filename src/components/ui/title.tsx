import { cn } from '@/lib/utils';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  refProp?: React.MutableRefObject<HTMLHeadingElement | null>;
}

const Title = ({ children, className, refProp }: TitleProps) => {
  const classMerge = cn(
    'text-xl lg:text-2xl xl:text-3xl font-bold font-montserrat',
    className
  );
  return (
    <h3 ref={refProp} className={classMerge}>
      {children}
    </h3>
  );
};

export default Title;
