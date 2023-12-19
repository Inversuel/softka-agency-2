import React, { useState, useRef } from 'react';
import KMLink from '../KMLink';
import Logo from '../Logo';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import gsap from 'gsap';

export const MobileNav = (): JSX.Element => {
  const [openMobile, setOpenMobile] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>();
  const navRef = useRef<HTMLDivElement>(null);
  const buttonOpen = useRef<HTMLButtonElement>(null);
  const buttonClose = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const toggleMobile = () => {
    setOpenMobile(!openMobile);
    toggleTimeline();
  };

  const toggleTimeline = () => {
    if (!tl.current) return;
    tl.current.reversed(!tl.current.reversed());
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(
          '.cm-clip-path-circle-0',
          {
            '--clip': '200%',
            duration: 1,
          },
          '<'
        )
        .to(
          buttonOpen.current,
          { display: 'none', rotate: '90deg', opacity: 0, duration: 0.3 },
          '<'
        )
        .to(buttonClose.current, { display: 'block', opacity: 1, duration: 0.2 }, '<')
        .reverse();
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={container} className="lg:hidden relative w-full">
      <div className="flex flex-row-reverse justify-between w-full fixed top-6 z-[999] lg:px-24 md:px-12 px-4">
        <div className="h-10 w-10 relative">
          <button ref={buttonOpen} onClick={toggleMobile} className={`block absolute z-[999]`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-lightest"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
          <button
            ref={buttonClose}
            onClick={toggleMobile}
            className={`hidden absolute z-[999] opacity-0`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-lightest"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <Logo className="cursor-pointer" />
      </div>
      <div
        ref={navRef}
        className="flex flex-col gap-8 px-4 py-24 justify-end items-left w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-darkest z-[99] cm-clip-path-circle-0"
      >
        <KMLink className="text-3xl" href="/">
          Home
        </KMLink>
        <KMLink className="text-3xl" href="/projects">
          Projects
        </KMLink>
        <KMLink className="text-3xl" href="/services">
          Service
        </KMLink>
        <KMLink className="text-3xl" href="/contact">
          Contact
        </KMLink>
        <button className="py-3 px-12 bg-brand text-lightest rounded-3xl hover:scale-105 hover:shadow-xl">
          Get Started
        </button>
      </div>
    </nav>
  );
};
