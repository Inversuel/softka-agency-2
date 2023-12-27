'use client';

import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Tech from '@/components/Tech';
import WhyUs from '@/components/WhyUs';
import { ProjectsList } from '@/components/projects/ProjectsDektop/ProjectComponent';
import { ProjectsListMobile } from '@/components/projects/ProjectsMobile/ProjectsListMobile';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Softka | Home',
//   description: 'Generated by create next app',
// };
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
    <main
      id="main"
      className="relative bg-light dark:bg-black flex min-h-screen flex-col overflow-x-hidden"
    >
      <Toaster />
      <Hero />
      <Services />
      <div className="relative w-fit lg:block hidden">
        <ProjectsList />
      </div>
      <ProjectsListMobile />
      <WhyUs />
      <Tech />
      <Contact />
    </main>
  );
}

// Hero
// Tech
// Benefits
// Projects
// Why us
// Review
// COntact Us
