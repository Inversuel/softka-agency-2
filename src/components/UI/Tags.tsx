import { cn } from '@/lib/utils';
import React from 'react';

interface TagsProps {
  array: string[];
  containerClassName?: string;
  pClassName?: string;
}

const Tags = ({ array, containerClassName, pClassName }: TagsProps) => {
  const containerClass = cn('flex gap-3 flex-wrap w-full', containerClassName);
  const pClass = cn(
    'text-sm lg:text-lg xl:text-xl font-semibold text-lightest bg-dark rounded-3xl py-1 px-4 ',
    pClassName
  );
  return (
    <div className={containerClass}>
      {array.map((tech) => (
        <p key={tech} className={pClass}>
          {tech}
        </p>
      ))}
    </div>
  );
};

export default Tags;
