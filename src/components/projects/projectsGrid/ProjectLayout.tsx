import Description from '@/components/UI/description';
import Tags from '@/components/UI/tags';
import Title from '@/components/UI/title';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import NextBreadcrumb from '@/components/breadcrumbs/NextBreadcrumb';

interface ProjectLayoutProps {
  tagsArray: string;
  imageSrc: string;
  imageAlt?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  title: string;
  description: ReactNode;
  ourPart: Array<string>;
}

const ProjectLayout = ({
  description,
  imageSrc,
  tagsArray,
  title,
  imageSrc2,
  imageAlt,
  imageAlt2,
  ourPart,
}: ProjectLayoutProps) => {
  const arrayTags = tagsArray.split(',');

  return (
    <main id="main" className="relative flex flex-col w-screen overflow-x-hidden">
      <NextBreadcrumb padding={true} />
      <section className="3xl:max-w-8xl 3xl:self-center z-[0] bg-light dark:bg-black overflow-x-hidden flex flex-col-reverse gap-10 items-start justify-center 3xl:justify-end p-4 lg:p-24">
        {imageSrc2 && (
          <Image
            width={1000}
            height={875}
            src={imageSrc}
            priority
            alt={imageAlt ?? 'Project Mockup'}
            className="rounded-3xl z-[1] transform-3d"
            loading="eager"
          />
        )}
        <div className="flex flex-row-reverse items-start gap-5">
          <Image
            width={1000}
            height={875}
            src={imageSrc2 ?? ''}
            alt={imageAlt2 ?? 'Project Mockup'}
            className="rounded-3xl z-[1] transform-3d w-1/2"
            loading="lazy"
          />
          <div className="z-[2] lg:max-w-2xl p-4 w-full">
            <Title>{title}</Title>
            <div className="flex flex-col gap-4 flex-wrap">
              <div className="flex flex-col w-full">
                <span className="font-semibold text-6xl opacity-10 -mb-8">Description</span>
                <Description>{description}</Description>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-6xl  opacity-10 -mb-8">Technologies</span>
                <Tags array={arrayTags} containerClassName="z-10" />
              </div>
              <div className="flex flex-col w-full">
                <span className="font-semibold text-6xl opacity-10 -mb-8">Our part</span>
                <div className="flex flex-col gap-5">
                  {ourPart.map((par) => {
                    return (
                      <pre
                        key={par.slice(0, 10)}
                        className="text-left lg:text-lg xl:text-xl whitespace-pre-line font-poppins"
                      >
                        {par}
                      </pre>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectLayout;
