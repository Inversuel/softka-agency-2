import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LinkButton, { LinkButtonMobile } from '../../UI/LinkButton';
import gsap from 'gsap';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';
import Tags from '@/components/UI/Tags';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';

export const CHBProjectMobile = (): JSX.Element => {
  const arrayTags = 'React Native, React Hook Form,React Query, Typescript, Figma, Firebase'.split(
    ','
  );
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

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
        scale: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(imageRef2.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        scale: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef2.current,
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
    <section className="w-screen py-12 px-4 md:px-12 flex flex-col items-center">
      <div className="w-screen relative">
        <Image
          ref={imageRef}
          width={1339}
          height={2716}
          src="/img/chb-mockup2.png"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 opacity-0 translate-x-20 scale-x-125"
        />
      </div>
      <div className="flex flex-col py-11 gap-10 justify-center items-center">
        <div>
          <Title refProp={titleRef} className="text-4xl opacity-0 translate-x-20">
            Christian Hypnobirthing Project
          </Title>
          <div className="flex flex-col gap-4">
            <div ref={descRef} className="flex flex-col  opacity-0 translate-x-20">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <Description className="max-w-xs">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </Description>
            </div>
            <div ref={techRef} className="flex flex-col gap-3 max-w-xs opacity-0 translate-x-20">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButtonMobile
          refProp={buttonRef}
          href="projects/chb"
          text="Learn More"
          className="scale-110 opacity-0 translate-x-20"
        />
      </div>
      <div className="w-screen relative">
        <Image
          ref={imageRef2}
          width={1339}
          height={2716}
          src="/img/chb-mockup.png"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 opacity-0 translate-x-20"
        />
      </div>
    </section>
  );
};
