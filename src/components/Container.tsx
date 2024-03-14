import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  refProp?: React.Ref<HTMLDivElement>;
}

export const Container = ({ children, className, refProp }: ContainerProps): JSX.Element => {
  const twMergeClass = cn('p-24 w-full', className);
  return (
    <section ref={refProp} className={twMergeClass}>
      {children}
    </section>
  );
};
