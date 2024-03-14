import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className: string;
  refProp?: React.MutableRefObject<null | HTMLDivElement>;
}

const Logo = ({ className, refProp }: LogoProps): JSX.Element => {
  const mergeClass = cn('flex gap-2 items-center', className);

  return (
    <div ref={refProp} className={mergeClass}>
      <Image width={40} height={40} src="/img/logo.png" alt="" className="h-auto" />
      <a href="/">
        <h6 className="hover-underline-animation font-montserrat text-2xl text-darkest dark:text-lightest leading-5 font-bold">
          Softly
        </h6>
      </a>
    </div>
  );
};

export default Logo;
