'use client';

import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import gsap from 'gsap';
import Image from 'next/image';

const TechSlider = () => {
  const main = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
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

  useIsomorphicLayoutEffect(() => {
    if (!main.current && !overlayRef.current) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.itemInf');
      gsap.set(sections, {
        x: (i) => i * 140,
      });

      gsap.to(sections, {
        duration: 4,
        ease: 'none',
        x: '+=128',
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % ((sections.length - 0) * 140)), //force x value to be between 0 and 500 using modulus
        },
        repeat: -1,
        repeatRefresh: true,
      });
    }, main);
    return () => {
      ctx.revert();
    };
  }, [main.current]);

  return (
    <div className="relative h-36 rotate-12 -translate-y-10">
      {/* <div className="absolute lg:-left-24 lg:-right-24 -left-4 -right-4 md:-left-12 md:-right-12 h-48 top-1/2 -translate-y-1/2 bg-gradient-to-r from-light dark:from-black via-transparent dark:via-transparent dark:to-black to-light z-[2]" /> */}
      <div ref={main} className="relative -left-32 my-7 bg-fade-opacity-gradient">
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
