import { useRef } from 'react';
import Image from 'next/image';
import LinkButton from '../../UI/LinkButton';
import Tags from '@/components/UI/Tags';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';


export const CHBProject = (): JSX.Element => {
  const iphoneRef = useRef<HTMLImageElement>(null);
  const iphoneRef2 = useRef<HTMLImageElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  const arrayTags = 'React Native, React Hook Form,React Query, Typescript, Figma, Firebase'.split(
    ','
  );

  return (
    <section className="h-screen w-screen relative p-12 flex flex-row items-center flex-shrink-0 itemScroll">
      <div
        ref={textContainer}
        className="flex flex-col p-11 gap-10 xl:min-w-[750px] 3xl:min-w-[1240px] justify-center items-center"
      >
        <div>
          <Title className="">Christian Hypnobirthing Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Description</span>
              <Description className="flex flex-col max-w-xl">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </Description>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Technologies</span>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButton href="projects/chb" text="Learn More" aria-label="Learn more about CHB" />
      </div>
      <div className="w-full h-1/2 relative">
        <Image
          ref={iphoneRef}
          width={1339}
          height={2716}
          src="/img/chb-mockup.webp"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-[11] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50"
        />
        <Image
          ref={iphoneRef2}
          width={1339}
          height={2716}
          src="/img/chb-mockup2.webp"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};
