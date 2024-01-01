import { useRef } from 'react';
import Image from 'next/image';
import LinkButton from '../../UI/LinkButton';
import gsap from 'gsap';
import Tags from '@/components/UI/Tags';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';

interface CHBProjectProps {
  triggerTimeline?: gsap.core.Tween;
}

export const CHBProject = ({ triggerTimeline }: CHBProjectProps): JSX.Element => {
  const iphoneRef = useRef<HTMLImageElement>(null);
  const iphoneRef2 = useRef<HTMLImageElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  const arrayTags = 'React Native, React Hook Form,React Query, Typescript, Figma, Firebase'.split(
    ','
  );

  useIsomorphicLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textContainer.current,
          containerAnimation: triggerTimeline,
          start: 'start 80%',
          end: '80% 80%',
          toggleActions: 'play none none reverse',
        },
      });
      tl.to(iphoneRef.current, {
        scale: 0.4,
        duration: 0.5,
        opacity: 1,
        ease: 'power3.inOut',
        zIndex: 11,
      });
      tl.to(iphoneRef2.current, {
        scale: 0.7,
        duration: 0.5,
        opacity: 1,
        ease: 'power3.inOut',
      });
      tl.to(textContainer.current, {
        duration: 0.5,
        ease: 'power3.inOut',
        opacity: 1,
        alignItems: 'flex-start',
      });
    });
    return () => context.revert();
  }, [triggerTimeline]);
  return (
    <section className="h-screen w-screen relative p-12 flex flex-row items-center flex-shrink-0 itemScroll">
      <div
        ref={textContainer}
        className="flex flex-col p-11 gap-10 xl:min-w-[750px] 3xl:min-w-[1240px] justify-center items-center opacity-0"
      >
        <div>
          <Title className="">Christian Hypnobirthing Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <Description className="flex flex-col max-w-xl">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </Description>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButton href="projects/chb" text="Learn More" />
      </div>
      <div className="w-full h-1/2 relative">
        <Image
          ref={iphoneRef}
          width={1339}
          height={2716}
          src="/img/chb-mockup.png"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
        />
        <Image
          ref={iphoneRef2}
          width={1339}
          height={2716}
          src="/img/chb-mockup2.png"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-0"
        />
      </div>
    </section>
  );
};
