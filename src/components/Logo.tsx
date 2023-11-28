import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps): JSX.Element => {
  const mergeClass = twMerge(className, 'flex gap-2 items-center');

  return (
    <div className={mergeClass}>
      <Image width={40} height={40} src="/img/logo.png" alt="" />
      <h6 className="font-montserrat text-2xl hover:underline hover:scale-110 hover:text-brand  leading-5 font-bold transition ease-in-out duration-500">
        Softly
      </h6>
    </div>
  );
};

export default Logo;
