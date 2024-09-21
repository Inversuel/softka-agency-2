'use client';

import Hero from '@/components/Hero';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Nav from '@/components/navigation/Nav';

// const WhyUs = dynamic(() => import('@/components/WhyUs'), {
//   loading: () => <div className="h-screen w-screen bg-black text-lightest">Loading...</div>,
// });
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="h-screen w-screen bg-black text-lightest"></div>,
});
const ProjectsList = dynamic(
  () =>
    import('@/components/projects/ProjectsDektop/ProjectComponent').then((mod) => mod.ProjectsList),
  {
    loading: () => <div className="h-screen w-screen bg-black text-lightest"></div>,
  }
);
// const ProjectsListMobile = dynamic(
//   () =>
//     import('@/components/projects/ProjectsMobile/ProjectsListMobile').then(
//       (mod) => mod.ProjectsListMobile
//     ),
//   {
//     loading: () => <div className="h-screen w-screen bg-black text-lightest">Loading...</div>,
//   }
// );
const Tech = dynamic(() => import('@/components/tech/Tech'), {
  loading: () => <div className="h-screen w-screen bg-black text-lightest">Loading...</div>,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-screen w-screen bg-black text-lightest">Loading...</div>,
});

export default function Home(): JSX.Element {
  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      img.style.webkitUserSelect = 'none';
      img.style.userSelect = 'none';
      img.addEventListener('contextmenu', (evt) => {
        evt.preventDefault();
        return false;
      });
    });
  }, []);

  return (
    <main id="main" className="relative flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Toaster />
      <Nav />
      <Hero />
      <Services />
      <ProjectsList />

      {/* <div className="relative w-fit lg:block hidden">
      </div>
      <ProjectsListMobile /> */}
      {/* <WhyUs /> */}
      <Tech />
      <Contact />
    </main>
  );
}
