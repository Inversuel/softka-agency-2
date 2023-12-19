import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className: string;
  refProp?: React.MutableRefObject<null | HTMLDivElement>;
}

const Logo = ({ className, refProp }: LogoProps): JSX.Element => {
  const mergeClass = twMerge('flex gap-2 items-center', className);

  return (
    <div ref={refProp} className={mergeClass}>
      <Image width={40} height={40} src="/img/logo.png" alt="" />
      <a href="/">
        <h6
          className="font-montserrat text-2xl hover:underline hover:scale-110 hover:text-brand  leading-5 font-bold
        //  transition ease-in-out duration-500
        "
        >
          Softly
        </h6>
      </a>
    </div>
  );
};

export default Logo;
