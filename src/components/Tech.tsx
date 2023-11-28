'use client';
import React, { useRef } from 'react';
import { Container } from './Container';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import gsap from 'gsap';
import Image from 'next/image';

// import logoAndroid from '/logo/logo-android.svg';
// import logoApple from '/logo/logo-apple.svg';
// import logoAws from '/logo/logo-aws.svg';
// import logoCSS from '/logo/logo-css.svg';
// import logoCypress from '/logo/logo-cypress.svg';
// import logoExpress from '/logo/logo-express.svg';
// import logoFigma from '/logo/logo-figma.svg';
// import logoFirebase from '/logo/logo-firebase.svg';
// import logoGatsby from '/logo/logo-gatsby.svg';
// import logoHtml from '/logo/logo-html.svg';
// import logoIos from '/logo/logo-ios.svg';
// import logoJS from '/logo/logo-js.svg';
// import logoNext from '/logo/logo-next.svg';
// import logoPS from '/logo/logo-ps.svg';
// import logoReact from '/logo/logo-react.svg';
// import logoTailwindcssName from '/logo/logo-tailwindcss-name.svg';
// import logoTailwindcss from '/logo/logo-tailwindcss.svg';
// import logoTS from '/logo/logo-ts.svg';
// import logoVercel from '/logo/logo-vercel.svg';
// import logoVue from '/logo/logo-vue.svg';

const Tech = (): JSX.Element => {
  const main = useRef<HTMLDivElement | null>(null);
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
    if (!main.current) return;
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
    return () => ctx.revert();
  }, [main.current]);

  return (
    <Container className="second-section w-screen ">
      <div ref={main} className=" relative -left-32 my-7">
        <div className="relative top-0 -left-32 -translate-y-[50%] opacity-20">
          {logos.map((logo, i) => (
            <TechItem
              src={logo}
              key={i}
              className={`absolute  top-0 -translate-y-[50%] itemInf h-32 w-32 grid place-items-center`}
            ></TechItem>
          ))}
        </div>
      </div>
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
      {src && <Image src={src} alt={src.split('-')[1]} fill className="" />}
      {children}
    </div>
  );
};
