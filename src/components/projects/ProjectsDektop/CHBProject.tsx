import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LinkButton from '../../UI/LinkButton';
import gsap from 'gsap';

interface CHBProjectProps {
  triggerTimeline?: gsap.core.Tween;
}

export const CHBProject = ({ triggerTimeline }: CHBProjectProps): JSX.Element => {
  const iphoneRef = useRef<HTMLImageElement>(null);
  const iphoneRef2 = useRef<HTMLImageElement>(null);

  const textContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(iphoneRef.current, {
        scale: 0.4,
        duration: 1,
        delay: 0.45,
        opacity: 1,
        ease: 'power3.inOut',
        zIndex: 11,
        scrollTrigger: {
          trigger: textContainer.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
        },
        id: '1',
      });
      gsap.to(iphoneRef2.current, {
        scale: 0.7,
        duration: 1,
        delay: 0.45,
        opacity: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: textContainer.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
        },
        id: '3',
      });
      gsap.to(textContainer.current, {
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.3,
        opacity: 1,
        alignItems: 'flex-start',
        scrollTrigger: {
          trigger: textContainer.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
        },
        id: '2',
      });
    });
    return () => context.revert();
  }, [triggerTimeline]);
  return (
    <section className="h-screen w-screen p-12 flex flex-row items-center flex-shrink-0 itemScroll">
      <div
        ref={textContainer}
        className="flex flex-col p-11 gap-10 min-w-[850px] justify-center items-center opacity-0"
      >
        <div>
          <h2 className="font-montserrat text-4xl font-bold ">Christian Hypnobirthing Project</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <p className="text-lg flex flex-col max-w-xl">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <p className="text-lg">
                React Native, React Hook Form,React Query, Typescript, Figma, Firebase,
              </p>
            </div>
          </div>
        </div>
        <LinkButton href="projects/chb" text="Learn More" />
      </div>
      <div className="w-full h-full relative grid align-center">
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
