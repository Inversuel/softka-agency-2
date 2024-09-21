'use client';

import React from 'react';
import Image from 'next/image';

const TechSlider = () => {
  const logos = [
    '/logo/logo-android.svg',
    '/logo/logo-apple.svg',
    '/logo/logo-aws.svg',
    '/logo/logo-css.svg',
    '/logo/logo-cypress.svg',
    '/logo/logo-express.svg',
    '/logo/logo-figma.svg',
    '/logo/logo-firebase.svg',
    '/logo/logo-gatsby.svg',
    '/logo/logo-html.svg',
    '/logo/logo-ios.svg',
    '/logo/logo-js.svg',
    '/logo/logo-next.svg',
    '/logo/logo-ps.svg',
    '/logo/logo-react.svg',
    '/logo/logo-tailwindcss-name.svg',
    '/logo/logo-ts.svg',
    '/logo/logo-vercel.svg',
    '/logo/logo-vue.svg',
  ];

  return (
    <div className="relative h-36 rotate-12 -translate-y-10">
      <div className="relative -left-32 my-7 bg-fade-opacity-gradient">
        <div className="relative -left-32 h-32 lg:transform-gpu transform-none">
          {logos.map((logo, i) => (
            <TechItem
              src={logo}
              key={i}
              className={`absolute top-1/2 -translate-y-1/2  itemInf h-32 w-32 grid place-items-center`}
            ></TechItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSlider;

interface TechItemProps {
  children?: React.ReactNode;
  src?: string;
  className?: string;
}

const TechItem = ({ children, src, className }: TechItemProps) => {
  return (
    <div className={className}>
      {src && <Image src={src} alt={src.split('-')[1]} fill className="grayscale invert" />}
      {children}
    </div>
  );
};
