import { cn } from '@/lib/utils';
import React from 'react';

interface DescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const Description = ({ children, className }: DescriptionProps) => {
  const classMerge = cn('text-left lg:text-lg xl:text-xl', className);
  return <p className={classMerge}>{children}</p>;
};

export default Description;
