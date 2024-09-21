'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';
import Title from '@/components/ui/title';
import Description from '@/components/ui/description';
import Tags from '@/components/ui/tags';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { buttonVariants } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';

export const FreeDayProject = (): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const TagsArray =
    'React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma, Firebase'.split(
      ','
    );

  useEffect(() => {
    if (!imageRef.current || !textRef.current) return;
    VanillaTilt.init(imageRef.current, {
      max: 15,
      perspective: 1400,
      easing: 'cubic-bezier(.03,.98,.52,.99)',
      speed: 1200,
      glare: true,
      'max-glare': 0.2,
      scale: 1.04,
    });
  }, []);

  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-full sm:h-[650px] p-2 sm:p-12 flex flex-col sm:flex-row"
    >
      <div
        ref={textRef}
        className="flex flex-col w-full p-2 sm:p-11 gap-10 justify-center items-start relative"
      >
        <Title>FreeDay Project</Title>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <Typography variant="mutedText" className="font-semibold text-7xl opacity-5 -mb-10">
              Description
            </Typography>
            <Description className="max-w-2xl">
              An AI app that provides automation for chats and emails, it also provides a
              <span className="text-brand"> dashboard</span> for the company to manage the
              information and the <span className="text-brand">AI</span>.
            </Description>
          </div>
          <div className="flex flex-col gap-3">
            <Typography variant="mutedText" className="font-semibold text-7xl opacity-5 -mb-10">
              Technologies
            </Typography>
            <Tags array={TagsArray} containerClassName="z-10" />
          </div>
        </div>
        <Link
          href="/projects/freeday"
          className={buttonVariants({ variant: 'default', size: 'lg' })}
          aria-label="Learn more about the freeday project"
        >
          <Typography className="text-white">Learn More</Typography>
        </Link>
      </div>
      <div className="hidden lg:grid w-full h-full place-items-center">
        <Image
          ref={imageRef}
          width={1000}
          height={875}
          src="/img/freeDayApp.webp"
          alt="FreeDay Project Mockup"
          className="rounded-3xl transform-3d"
        />
      </div>
    </motion.section>
  );
};
