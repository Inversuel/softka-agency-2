import React, { useRef } from 'react';
import KMLink from '../KMLink';
import Logo from '../Logo';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export const DesktopNav = (): JSX.Element => {
  const pathname = usePathname();

  const main = useRef<HTMLElement>(null);
  const logoRef = useRef(null);
  const linkRef1 = useRef<HTMLAnchorElement>(null);
  const linkRef2 = useRef<HTMLAnchorElement>(null);
  const linkRef3 = useRef<HTMLAnchorElement>(null);
  const linkRef4 = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const textButtonRef = useRef<HTMLButtonElement>(null);
  const mailIconRef = useRef<SVGSVGElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from('.km-stagger', {
        yPercent: -100,
        duration: 1,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: 'sine.out',
        force3D: true,
      });
      gsap.to(buttonRef.current, {
        y: 1,
        duration: 1,
        opacity: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: 'sine.out',
        force3D: true,
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: buttonRef.current,
          start: '+=330',
          end: '+=1',
          toggleActions: 'play none none reverse',
          scrub: 1,
          markers: false,
        },
      });
      tl2.to(buttonRef.current, {
        top: 'auto',
      });
      tl2.to(buttonRef.current, {
        bottom: '5rem',
        right: '5rem',
        zIndex: 100,
        width: '5rem',
        height: '5rem',
        borderRadius: '1000rem',
        paddingTop: '0rem',
        paddingBottom: '0rem',
        paddingLeft: '0rem',
        paddingRight: '0rem',
      });
      tl2.to(textButtonRef.current, { opacity: 0, display: 'none' }, '<');
      tl2.to(mailIconRef.current, { opacity: 1, display: 'block' }, '<');
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <nav
      ref={main}
      className="hidden lg:flex w-full align-middle items-center justify-between lg:px-24 px-4"
    >
      <Logo refProp={logoRef} className="flex self-start cursor-pointer km-stagger" />
      <div className="flex gap-7 align-middle items-center min-w-[614px] relative">
        <KMLink className="km-stagger" refProp={linkRef1} href="/">
          Home
        </KMLink>
        <KMLink className="km-stagger" refProp={linkRef2} href="/projects">
          Projects
        </KMLink>
        <KMLink className="km-stagger" refProp={linkRef3} href="/services">
          Service
        </KMLink>
        <KMLink className="km-stagger" refProp={linkRef4} href="/contact">
          Contact
        </KMLink>
        <button
          ref={buttonRef}
          className="py-3 px-12 grid place-items-center bg-brand text-lightest rounded-3xl hover:scale-105 hover:shadow-xl cursor-pointer fixed lg:right-24 right-4 lg:top-12 top-4 3xl:right-[40rem] transition duration-500 -translate-y-40 opacity-0"
        >
          <span ref={textButtonRef}>Get Started</span>
          <span className="absolute">
            <svg
              ref={mailIconRef}
              className="opacity-0 hidden"
              height="50px"
              width="50px"
              viewBox="0 0 220 220"
            >
              <path
                d="M108.881,5.334C48.844,5.334,0,45.339,0,94.512c0,28.976,16.84,55.715,45.332,72.454
              c-3.953,18.48-12.812,31.448-12.909,31.588l-9.685,13.873l16.798-2.153c1.935-0.249,47.001-6.222,79.122-26.942
              c26.378-1.92,50.877-11.597,69.181-27.364c19.296-16.623,29.923-38.448,29.923-61.455C217.762,45.339,168.918,5.334,108.881,5.334z
              M115.762,168.489l-2.049,0.117l-1.704,1.145c-18.679,12.548-43.685,19.509-59.416,22.913c3.3-7.377,6.768-17.184,8.499-28.506
              l0.809-5.292l-4.741-2.485C30.761,142.547,15,119.42,15,94.512c0-40.901,42.115-74.178,93.881-74.178s93.881,33.276,93.881,74.178
              C202.762,133.194,164.547,165.688,115.762,168.489z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};
