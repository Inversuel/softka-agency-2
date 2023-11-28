import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  refProp?: React.Ref<HTMLDivElement>;
}

export const Container = ({ children, className, refProp }: ContainerProps): JSX.Element => {
  const twMergeClass = twMerge('p-24 w-full', className);
  return (
    <section ref={refProp} className={twMergeClass}>
      {children}
    </section>
  );
};
