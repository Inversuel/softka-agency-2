'use client';

import Hero from '@/components/Hero';
import Tech from '@/components/Tech';
import { ProjectsList } from '@/components/projects/ProjectComponent';

// import type { Metadata } from 'next';
import { useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'Softka | Home',
//   description: 'Generated by create next app',
// };
export default function Home(): JSX.Element {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="relative flex min-h-screen flex-col">
      <Hero />
      <Tech />
      <div className="relative h-screen w-fit">
        <ProjectsList />
        <section className="h-screen w-screen block bg-red-500">
          <h1>Why Us</h1>
        </section>
      </div>
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
