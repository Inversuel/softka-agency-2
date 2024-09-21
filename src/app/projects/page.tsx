import Headline from '@/components/UI/headline';
import React from 'react';
import { ProjectData } from '@/projectData';
import Link from 'next/link';
import Image from 'next/image';
import NextBreadcrumb from '@/components/breadcrumbs/NextBreadcrumb';

const ProjectsGrid = () => {
  return (
    <section className="relative w-screen flex flex-col justify-start font-poppins">
      <div className="3xl:max-w-8xl 3xl:self-center px-4 md:px-12 lg:px-24">
        <NextBreadcrumb padding={false} />
        <Headline className="">Projects</Headline>
        <div className="flex flex-row flex-wrap w-full gap-4 mb-10">
          {ProjectData.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between relative bg-dark rounded-3xl w-96 h-[592px]"
            >
              <div className="relative h-[600px] w-[300px] mx-auto">
                <Image
                  alt={project.imageAlt2 ?? 'Project mockup image'}
                  src={project.imageSrc2 ?? ''}
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col p-4 gap-4 h-full justify-around items-start">
                <h1 className="font-semibold text-2xl">{project.title}</h1>
                <p className="line-clamp-3">{project.description}</p>
                <Link
                  href={project.href}
                  className="border rounded-3xl px-7 py-3 self-end hover:bg-brand hover:text-lightest hover:border-black transition duration-500"
                  aria-label={`Learn more about ${project.title}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
