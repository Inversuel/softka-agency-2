import React from 'react';
import Image from 'next/image';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';
import Tags from '@/components/UI/Tags';

const Page = () => {
  const TagsArray =
    'React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma, Firebase'.split(
      ','
    );
  const imageSrc = '/img/freeDayApp.jpg';

  return (
    <main id="main" className="relative flex flex-col w-screen overflow-x-hidden">
      <section className="2xl:max-w-8xl 2xl:self-center z-[0] bg-light dark:bg-black overflow-x-hidden flex flex-col-reverse gap-10 items-start justify-center 3xl:justify-end p-4 lg:p-24">
        <Image
          width={1000}
          height={875}
          src={imageSrc}
          priority
          alt="FreeDay Project Mockup"
          className="rounded-3xl z-[1] transform-3d"
          loading="eager"
        />
        <div className="z-[2] lg:max-w-2xl p-4 w-full">
          <Title>FreeDay Project</Title>
          <div className="flex flex-col gap-4 flex-wrap">
            <div className="flex flex-col w-full">
              <p className="font-semibold text-6xl opacity-10 -mb-8">Description</p>
              <Description>
                An AI app that provides automation for chats and emails, it also provides a
                <span className="text-brand"> dashboard</span> for the company to manage the
                information and the <span className="text-brand">AI</span>.
              </Description>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-6xl  opacity-10 -mb-8">Technologies</p>
              <Tags array={TagsArray} containerClassName="z-10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
