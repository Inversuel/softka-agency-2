'use client';

import Image from 'next/image';
import Title from '@/components/UI/title';
import Description from '@/components/UI/description';
import Tags from '@/components/UI/tags';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography } from '@/components/UI/typography';
import { buttonVariants } from '@/components/UI/button';

export const BarVouchersProject = (): JSX.Element => {
  const tagsArray =
    'React Native, React Hook Form,React Query, Stripe, Typescript, Figma, Firebase'.split(',');

  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="h-[650px] p-2 sm:p-12 grid grid-cols-5 flex-shrink-0"
    >
      <div className=" w-full h-full col-start-1 col-end-3 row-start-1 hidden lg:grid place-items-center">
        <Image
          width={1000}
          height={875}
          src="/img/barVoucherIphone.webp"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d hover:z-10"
        />
      </div>
      <div className="col-start-1 col-end-6 lg:col-start-2 lg:col-end-5 row-start-1 flex flex-col p-2 lg:p-11 gap-10 justify-center items-start 2xl:items-center backdrop-blur-lg">
        <div className="w-full">
          <Title>Bar Voucher Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <Typography variant="mutedText" className="font-semibold text-7xl opacity-5 -mb-10">Description</Typography>
              <Description className="max-w-xl">
                <span className="text-brand">BarVoucher</span> Your gateway to exclusive discounts
                at premier bars and restaurants across your city. App provides a filter of bars,
                city, distance from a device, and a map view of the bars.
                <span className="font-semibold">Soon available on IOS and Android</span>
              </Description>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <Typography variant="mutedText" className="font-semibold text-7xl opacity-5 -mb-10">Technologies</Typography>
              <Tags array={tagsArray} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <Link href="projects/barvoucher"
          className={buttonVariants({ variant: "default", size: 'lg' })}
          aria-label="Learn More About BarVoucher">
          Learn More
        </Link>
      </div>
      <div className="col-start-4 col-end-6 row-start-1 w-full h-full hidden lg:grid place-items-center">
        <Image
          width={1000}
          height={875}
          src="/img/barVoucherIphone2.webp"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d z-10"
        />
      </div>
    </motion.section>
  );
};
