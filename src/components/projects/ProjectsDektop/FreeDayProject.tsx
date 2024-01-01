import { useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';
import LinkButton from '../../UI/LinkButton';
import gsap from 'gsap';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';
import Tags from '@/components/UI/Tags';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';

interface FreeDayProjectProps {
  triggerTimeline?: gsap.core.Tween;
}

export const FreeDayProject = ({ triggerTimeline }: FreeDayProjectProps): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const TagsArray =
    'React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma, Firebase'.split(
      ','
    );

  useIsomorphicLayoutEffect(() => {
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
    const context = gsap.context(() => {
      gsap.to(imageRef.current, {
        duration: 0.3,
        ease: 'power3.inOut',
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: textRef.current,
          containerAnimation: triggerTimeline,
          start: '0% 50%',
          toggleActions: 'play none none reverse',
        },
      });
      gsap.to(textRef.current, {
        duration: 0.3,
        ease: 'power3.inOut',
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: textRef.current,
          containerAnimation: triggerTimeline,
          start: '0% 99%',
          toggleActions: 'play none none reverse',
        },
      });
    });
    return () => context.revert();
  }, [triggerTimeline]);

  return (
    <section className="h-screen w-screen p-12 flex flex-shrink-0 itemScroll">
      <div
        ref={textRef}
        className="flex flex-col p-11 gap-10 justify-center items-start relative cm-clip-path-left-0"
      >
        <div>
          <Title>FreeDay Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Description</span>
              <Description className="max-w-2xl">
                An AI app that provides automation for chats and emails, it also provides a
                <span className="text-brand"> dashboard</span> for the company to manage the
                information and the <span className="text-brand">AI</span>.
              </Description>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Technologies</span>
              <Tags array={TagsArray} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButton href="/projects/freeday" text="Learn More" />
      </div>
      <div className="w-full h-full grid place-items-center">
        <Image
          ref={imageRef}
          width={1000}
          height={875}
          src="/img/freeDayApp.webp"
          alt="FreeDay Project Mockup"
          className="rounded-3xl transform-3d scale-0 opacity-0"
        />
      </div>
    </section>
  );
};
