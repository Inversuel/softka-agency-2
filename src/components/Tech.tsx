'use client';
import React, { useRef } from 'react';
import { Container } from './Container';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import gsap from 'gsap';
import Image from 'next/image';

const Tech = (): JSX.Element => {
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
    <Container className="relative second-section w-screen h-[50vh] flex flex-col gap-10">
      <h2 className="font-montserrat mb-4 text-5xl font-bold opacity-25">
        Technologies We Work With
      </h2>
      <div ref={main} className=" relative -left-32 my-7 bg-fade-opacity-gradient">
        <div className="relative -left-32 lg:transform-gpu transform-none">
          {logos.map((logo, i) => (
            <TechItem
              src={logo}
              key={i}
              className={`absolute top-0 -translate-y-[50%] itemInf h-32 w-32 grid place-items-center`}
            ></TechItem>
          ))}
        </div>
      </div>
      <div className="absolute left-0 right-0 top-0 bottom-0 w-screen bg-gradient-to-r from-black via-transparent to-black z-[2]" />
    </Container>
  );
};

export default Tech;

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
