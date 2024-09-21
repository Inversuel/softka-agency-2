import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

interface Props<T> extends React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T> {
  id: string;
  placeholder: string;
  className?: string;
}
type Ref<T> = T;

export const Input = forwardRef<Ref<HTMLInputElement>, Props<HTMLInputElement>>(
  function Input(props, ref) {
    const { className } = props;
    return (
      <input
        className={cn(
          'bg-background border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export const TextArea = forwardRef<Ref<HTMLTextAreaElement>, Props<HTMLTextAreaElement>>(
  function TextArea(props, ref) {
    const { className } = props;
    return (
      <textarea
        className={cn(
          'lg:col-span-2 3xl:col-auto bg-background border border-dark text-dark dark:text-lightest text-lg 3xl:text-3xl rounded-xl focus:border-brand block w-full p-2.5 dark:placeholder-light placeholder-dark  3xl:h-40 3xl:p-4 3xl:pl-6',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

