'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Headline = ({ children, className }: Props): JSX.Element => {
  const twMergeClass = cn(
    'font-montserrat md:text-3xl lg:text-5xl text-2xl font-bold opacity-25 mb-10 lg:mb-28',
    className
  );
  return <h1 className={twMergeClass}>{children}</h1>;
};

export default Headline;
