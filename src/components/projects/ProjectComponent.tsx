'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import {
  FreeDayProject,
  BarVouchersProject,
  CHBProject,
  SynLabProject,
  MayonesProject,
} from '@/components/projects/ProjectsData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
gsap.registerPlugin(ScrollTrigger);

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectComponent = ({ description, image, link, title }: ProjectProps): JSX.Element => {
  return (
    <section className="h-screen w-screen p-24 flex flex-col flex-shrink-0 itemScroll">
      <div className="flex flex-col gap-5">
        <h2 className="font-montserrat text-3xl font-bold ">{title}</h2>
        <p>{description}</p>
        <a href={link}>
          <button>Learn More</button>
        </a>
      </div>
      <Image width={1250} height={2000} src={image} alt={title} />
    </section>
  );
};

export default ProjectComponent;

export const ProjectsList = (): JSX.Element => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.itemScroll');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: 'top top',
          pin: scrollerRef.current,
          pinnedContainer: scrollerRef.current,
          scrub: true,
          // end: 'top bottom',
          end: () => '+=' + scrollerRef.current?.offsetWidth,
          markers: true,
        },
      });
    }, scrollerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollerRef} className="w-fit flex flex-nowrap h-screen overflow-hidden">
      <FreeDayProject />
      <BarVouchersProject />
      <CHBProject />
      <SynLabProject />
      <MayonesProject />
    </div>
  );
};
