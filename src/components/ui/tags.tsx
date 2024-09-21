import { cn } from '@/lib/utils';
import React from 'react';
import { Typography } from './typography';

interface TagsProps {
  array: string[];
  containerClassName?: string;
  pClassName?: string;
}

const Tags = ({ array, containerClassName, pClassName }: TagsProps) => {
  const containerClass = cn('flex gap-3 flex-wrap w-full', containerClassName);
  const pClass = cn('border border-foreground py-2 px-4 rounded-xl backdrop-blur', pClassName)
  return (
    <div className={containerClass}>
      {array.map((tech) => (
        <Typography variant="h4" type="milston" key={tech} className={pClass}>
          {tech}
        </Typography>
      ))}
    </div>
  );
};

export default Tags;
