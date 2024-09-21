import Image from 'next/image';
import Title from '@/components/UI/title';
import Description from '@/components/UI/description';
import Tags from '@/components/UI/tags';
import Link from 'next/link';

export const CHBProjectMobile = (): JSX.Element => {
  const arrayTags = 'React Native, React Hook Form,React Query, Typescript, Figma, Firebase'.split(
    ','
  );

  return (
    <section className="w-screen py-12 px-4 md:px-12 flex flex-col items-center">
      <div className="w-screen relative">
        <Image
          width={1339}
          height={2716}
          src="/img/chb-mockup2.webp"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10"
        />
      </div>
      <div className="flex flex-col py-11 gap-10 justify-center items-center">
        <div>
          <Title className="text-4xl">Christian Hypnobirthing Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Description</span>
              <Description className="max-w-xs">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </Description>
            </div>
            <div className="flex flex-col gap-3 max-w-xs ">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Technologies</span>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <Link
          href="projects/chb"
          className="scale-110 "
          aria-label="Learn more about CHB"
        >Learn more</Link>
      </div>
      <div className="w-screen relative">
        <Image
          width={1339}
          height={2716}
          src="/img/chb-mockup.webp"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 "
        />
      </div>
    </section>
  );
};
