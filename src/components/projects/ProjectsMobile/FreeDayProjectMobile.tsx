import Image from 'next/image';
import Tags from '@/components/ui/tags';
import Title from '@/components/ui/title';
import Description from '@/components/ui/description';
import Link from 'next/link';

export const FreeDayProjectMobile = (): JSX.Element => {
  const TagsArray =
    'React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma, Firebase'.split(
      ','
    );

  return (
    <section className="min-h-screen w-screen py-12 px-4 md:px-12 flex flex-col">
      <div className="flex flex-col py-11 gap-10 justify-center items-start relative">
        <div className="w-full">
          <Title className="text-4xl">FreeDay Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Description</span>
              <Description className="max-w-xs">
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
        <Link href="/projects/freeday">Learn more</Link>
      </div>
      <div className="w-full h-full grid place-items-start">
        <Image
          width={1000}
          height={875}
          src="/img/freeDayApp.webp"
          alt="FreeDay Project Mockup"
          className="rounded-3xl transform-3d"
        />
      </div>
    </section>
  );
};
