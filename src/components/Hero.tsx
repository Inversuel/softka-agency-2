'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollIndicator from './ScrollIndicator';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';

const Hero = (): JSX.Element => {
  const heroText = useRef(null);
  const heroSubText = useRef(null);
  const heroButton = useRef(null);
  const heroImage = useRef<HTMLImageElement | null>(null);
  const scopeRef = useRef<HTMLDivElement | null>(null);
  const blobRef = useRef<HTMLDivElement | null>(null);
  const blob2Ref = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(
        heroText.current,
        {
          duration: 0.7,
          opacity: 1,
        },
        0.2
      );
      tl.to(
        heroSubText.current,
        {
          duration: 0.7,
          opacity: 1,
        },
        0.3
      );
      tl.to(
        heroButton.current,
        {
          duration: 0.7,
          opacity: 1,
        },
        0.4
      );
      tl.to(
        blobRef.current,
        {
          duration: 0.7,
          opacity: 1,
        },
        1
      );
      tl.to(
        blob2Ref.current,
        {
          duration: 0.7,
          opacity: 1,
        },
        1
      );
      tl.to(
        heroImage.current,
        {
          duration: 0.7,
          opacity: 1,
        },
        0.5
      );
      tl.to(scrollIndicatorRef.current, {
        duration: 0.7,
        opacity: 1,
      });
    }, scopeRef);
    return () => ctx.revert();
  }, []);
  return (
    <section className="relative 2xl:max-w-8xl 2xl:self-center" ref={scopeRef}>
      <div
        ref={blobRef}
        className="rounded-full w-[600px] h-[600px] bg-brand absolute -top-28 -left-28 blur-[300px] opacity-0"
      />
      <div
        ref={blob2Ref}
        className="rounded-full w-[500px] h-[500px] bg-mid absolute -top-28 -right-28 blur-[300px] opacity-0 hidden lg:block"
      />
      <section className="min-h-screen 2xl:min-h-fit flex flex-col lg:grid lg:grid-cols-3 relative mt-12">
        <div className="lg:p-24 md:p-12 p-4 flex flex-col items-start gap-10 col-start-1 col-end-3 row-start-1">
          <h1
            ref={heroText}
            className="font-montserrat font-bold lg:text-6xl text-4xl text-darkest dark:text-lightest max-w-lg opacity-0"
          >
            Soft Transition To The WEB
          </h1>
          <h6
            ref={heroSubText}
            className="font-montserrat lg:text-2xl text-xl text-dark dark:text-light max-w-2xl opacity-0"
          >
            Transforming Digital Dreams into Seamless Realities
            <span className="text-brand"> Your</span> Vision,
            <span className="text-brand"> Our </span>
            Expertise
          </h6>
          <a href="#contactSection">
            <button
              ref={heroButton}
              className="relative lg:py-4 py-4 lg:px-11 px-7 bg-brand rounded-3xl lg:text-2xl text-lg font-semibold text-lightest flex flex-row gap-2 items-center opacity-0 active:scale-110 hover:scale-105 hover:shadow-xl transition duration-500"
            >
              Get Started <FaArrowRight />
            </button>
          </a>
        </div>
        <div className="col-start-2 col-end-4 row-start-1">
          <Image
            ref={heroImage}
            src="/img/Macbook2.png"
            width={2200}
            height={1750}
            priority
            className="opacity-0"
            alt="Macbook with work"
          />
        </div>
        <ScrollIndicator className="lg:col-start-2 lg:col-end-2 lg:row-start-1 pb-20" />
      </section>
    </section>
  );
};

export default Hero;
