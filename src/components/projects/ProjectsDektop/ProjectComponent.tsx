'use client';
import React, { useRef, useState } from 'react';
import { SynLabProject, MayonesProject } from '@/components/projects/ProjectsDektop/ProjectsData';
import { CHBProject } from './CHBProject';
import { BarVouchersProject } from './BarVouchersProject';
import { FreeDayProject } from './FreeDayProject';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import { EmptyScroll } from './EmptyScroll';

export const ProjectsList = (): JSX.Element => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [timeline, setTimeline] = useState<gsap.core.Tween | undefined>(undefined);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.itemScroll');
      const tl = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: 'top top',
          pin: scrollerRef.current,
          pinnedContainer: scrollerRef.current,
          scrub: true,
          end: () => '+=' + scrollerRef.current?.offsetWidth,
        },
      });
      setTimeline(tl);
    }, scrollerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={scrollerRef} className="w-fit flex flex-nowrap h-screen overflow-hidden">
      <EmptyScroll />
      <FreeDayProject triggerTimeline={timeline} />
      <BarVouchersProject triggerTimeline={timeline} />
      <CHBProject triggerTimeline={timeline} />
      <SynLabProject />
      <MayonesProject />
    </div>
  );
};
