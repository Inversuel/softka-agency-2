'use client';

import Image from 'next/image';
import Tags from '@/components/UI/tags';
import Title from '@/components/UI/title';
import Description from '@/components/UI/description';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography } from '@/components/UI/typography';
import { buttonVariants } from '@/components/UI/button';

export const CHBProject = (): JSX.Element => {
  const arrayTags = 'React Native, React Hook Form,React Query, Typescript, Figma, Firebase'.split(
    ','
  );

  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-[650px] relative p-2 sm:p-12 flex flex-row items-center"
    >
      <div className="flex flex-col p-2 sm:p-11 gap-10 w-full sm:w-[750px] xl:min-w-[750px] 3xl:min-w-[1240px] justify-center items-start">
        <div className="w-full">
          <Title className="">Christian Hypnobirthing Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Typography variant="mutedText" className="font-semibold text-7xl opacity-5 -mb-10">Description</Typography>
              <Description className="flex flex-col max-w-xl">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </Description>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <Typography variant="mutedText" className="font-semibold text-7xl opacity-5 -mb-10">Technologies</Typography>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <Link href="projects/chb" className={buttonVariants({ variant: 'default', size: "lg" })} aria-label="Learn more about CHB">
          Learn more
        </Link>
      </div>
      <div className="hidden lg:block w-full h-1/2 relative">
        <Image
          width={446}
          height={906}
          src="/img/chb-mockup.webp"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-[11] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[500px]"
        />
        <Image
          width={446}
          height={906}
          src="/img/chb-mockup2.webp"
          alt="Christian hypnobirth Project Mockup"
          className="rounded-3xl transform-3d z-10 absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-auto h-[500px]"
        />
      </div>
    </motion.section>
  );
};
