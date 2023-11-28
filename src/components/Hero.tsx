'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = (): JSX.Element => {
  const heroText = useRef(null);
  const heroSubText = useRef(null);
  const heroButton = useRef(null);
  const heroImage = useRef<HTMLImageElement | null>(null);
  const scopeRef = useRef<HTMLDivElement | null>(null);

  const animation = gsap.to(heroImage.current, {
    scale: 1.1,
    duration: 0.3,
    rotate: 5,
  });

  useLayoutEffect(() => {
    if (!heroImage.current) return;
    heroImage.current.addEventListener('mouseenter', () => animation.play());
    heroImage.current.addEventListener('mouseleave', () => animation.reverse());
  }, [animation]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(heroText.current, {
        delay: 0.5,
        duration: 0.7,
        opacity: 1,
      });
      gsap.to(heroSubText.current, {
        delay: 0.7,
        duration: 0.7,
        opacity: 1,
      });
      gsap.to(heroButton.current, {
        delay: 0.5,
        duration: 0.7,
        opacity: 1,
      });
    }, scopeRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="relative" ref={scopeRef}>
      <div
        data-scroll
        data-scroll-speed="-0.6"
        className="rounded-full w-[600px] h-[600px] bg-brand absolute -top-28 -left-28 blur-[300px]"
      />
      <div
        data-scroll
        data-scroll-speed="-0.8"
        className="rounded-full w-[500px] h-[500px] bg-mid absolute -top-28 -right-28 blur-[300px]"
      />
      <main className="h-screen z-10 grid grid-cols-3">
        <div className="p-24 z-10 flex flex-col items-start gap-10 col-start-1 col-end-3 row-start-1">
          <h1
            ref={heroText}
            className="font-montserrat font-bold text-6xl text-lightest max-w-lg opacity-0"
          >
            Soft Transition To The WEB
          </h1>
          <h6
            ref={heroSubText}
            className="font-montserrat text-2xl text-light max-w-2xl z-10 opacity-0"
          >
            Transforming Digital Dreams into Seamless Realities
            <span className="text-brand"> Your</span> Vision,
            <span className="text-brand"> Our </span>
            Expertise
          </h6>
          <button
            ref={heroButton}
            className="py-6 px-11 bg-brand rounded-3xl text-2xl font-semibold text-lightest flex flex-row gap-2 items-center opacity-0 active:scale-150 hover:scale-105 hover:shadow-xl transition duration-500"
          >
            Get Started <FaArrowRight />
          </button>
        </div>
        <div data-scroll data-speed-scroll="0.5" className="col-start-2 col-end-4 row-start-1">
          <Image
            ref={heroImage}
            src="/img/Macbook2.png"
            width={2200}
            height={1750}
            alt="Macbook with work"
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
