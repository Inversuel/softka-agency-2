'use client';
import React, { useRef, useState } from 'react';
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

// interface ProjectProps {
//   title: string;
//   description: JSX.Element;
//   image: string;
//   link: string;
// }

// const ProjectComponent = ({ description, image, link, title }: ProjectProps): JSX.Element => {
//   return (
//     <section className="h-screen w-screen p-12 grid grid-cols-3 flex-shrink-0 itemScroll">
//       <div className="flex flex-col p-11 gap-10 justify-center items-start col-start-1 col-end-3 row-start-1">
//         <div>
//           <h2 className="font-montserrat text-4xl font-bold ">{title}</h2>
//           {description}
//         </div>
//         <a href={link}>
//           <button className="py-6 rounded-3xl text-2xl font-semibold text-lightest flex flex-row gap-2 items-center active:scale-150 hover:scale-105 hover:shadow-xl transition duration-500">
//             Learn More
//           </button>
//         </a>
//       </div>
//       <Image
//         width={1000}
//         height={875}
//         src={image}
//         alt={title}
//         className="col-start-2 col-end-4 row-start-1"
//       />
//     </section>
//   );
// };

// export default ProjectComponent;

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
      <FreeDayProject />
      <BarVouchersProject />
      <CHBProject triggerTimeline={timeline} />
      <SynLabProject />
      <MayonesProject />
    </div>
  );
};
