import { cn } from '@/lib/utils';
import React from 'react';
import { Typography } from './typography';

interface DescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const Description = ({ children, className }: DescriptionProps) => {
  const classMerge = cn('text-left lg:text-lg xl:text-xl', className);
  return (
    <Typography variant="p" type="poppins" className={classMerge}>{children}</Typography>
  );
};

export default Description;
