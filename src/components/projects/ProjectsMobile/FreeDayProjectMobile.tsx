import { useRef } from 'react';
import Image from 'next/image';
import { LinkButtonMobile } from '../../UI/LinkButton';
import gsap from 'gsap';
import Tags from '@/components/UI/Tags';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';

export const FreeDayProjectMobile = (): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const TagsArray =
    'React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma, Firebase'.split(
      ','
    );
  useIsomorphicLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(techRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: techRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(descRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });
    return () => context.revert();
  }, []);

  return (
    <section className="min-h-screen w-screen py-12 px-4 md:px-12 flex flex-col">
      <div className="flex flex-col py-11 gap-10 justify-center items-start relative">
        <div className="w-full">
          <Title refProp={titleRef} className="text-4xl translate-x-20 opacity-0">
            FreeDay Project
          </Title>
          <div className="flex flex-col gap-4">
            <div ref={descRef} className="flex flex-col translate-x-20 opacity-0">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Description</span>
              <Description className="max-w-xs">
                An AI app that provides automation for chats and emails, it also provides a
                <span className="text-brand"> dashboard</span> for the company to manage the
                information and the <span className="text-brand">AI</span>.
              </Description>
            </div>
            <div ref={techRef} className="flex flex-col gap-3 translate-x-20 opacity-0">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Technologies</span>
              <Tags array={TagsArray} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButtonMobile
          refProp={buttonRef}
          href="/projects/freeday"
          text="Learn More"
          className="opacity-0 translate-x-20"
        />
      </div>
      <div className="w-full h-full grid place-items-start">
        <Image
          ref={imageRef}
          width={1000}
          height={875}
          src="/img/freeDayApp.webp"
          alt="FreeDay Project Mockup"
          className="rounded-3xl transform-3d translate-x-20 opacity-0"
        />
      </div>
    </section>
  );
};
