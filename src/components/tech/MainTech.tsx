'use client';

import React from 'react';
import Image from 'next/image';
import { Typography } from '../ui/typography';
import { motion } from 'framer-motion';

const MainTech = (): JSX.Element => {
  const topTech = [
    { title: 'React.js', logo: '/logo/logo-react.svg', x: -100, y: -50 },
    { title: 'React Native', logo: '/logo/logo-react.svg', x: -30, y: -100 },
    { title: 'Next.js', logo: '/logo/logo-next.svg', x: -220, y: 30 },
    { title: 'TailwindCss', logo: '/logo/logo-tailwindcss-name.svg', x: -20, y: -45 },
    { title: 'Photoshop', logo: '/logo/logo-ps.svg', x: 0, y: -70 },
    { title: 'TypeScript', logo: '/logo/logo-ts.svg', x: 30, y: -120 },
    { title: 'Firebase', logo: '/logo/logo-firebase.svg', x: -10, y: 10 },
    { title: 'Aws', logo: '/logo/logo-aws.svg', x: 20, y: -100 },
    { title: 'Google Cloud', logo: '/logo/logo-gcp.svg', x: -120, y: 140 },
    { title: '.Net', logo: '/logo/logo-net.svg', x: -40, y: 100 },
    { title: 'Nest.js', logo: 'https://nestjs.com/logo-small.ede75a6b.svg', x: 0, y: 40 },
    { title: 'Strapi', logo: '/logo/logo-strapi.svg', x: 120, y: 140 },
    { title: 'Wordpress', logo: '/logo/logo-wp.svg', x: 180, y: 80 },
    { title: 'Shopify', logo: '/logo/logo-shopify.svg', x: 240, y: 0 },
  ];

  const checkIfLogo = (title: string): boolean => {
    if (
      title === 'Next.js' ||
      title === 'Aws' ||
      title === 'Wordpress' ||
      title === 'TailwindCss'
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <article className="relative flex flex-col gap-14 z-[2] p-4 md:p-8 lg:p-10 backdrop-blur-lg rounded-3xl w-full bg-brand bg-clip-padding backdrop-filter bg-opacity-10">
      {/* <div className="absolute bottom-6 left-6 w-6">
        <span className="text-xl font-lusitana text-light">{text}</span>
      </div> */}
      <motion.div transition={{ delay: 1.1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Typography
          className="absolute inset-0 text-center flex items-center align-middle justify-center z-10"
          type="denike"
          variant="h1"
        >
          Our Technologies
        </Typography>
      </motion.div>
      <ul className="flex flex-row flex-wrap gap-2 md:gap-6 items-center justify-center">
        {topTech.map((item, i) => {
          return (
            <motion.li
              key={i + 999}
              className="relative grid place-items-center items-center min-h-[116px] min-w-[116px]"
              transition={{ delay: 0.05 * i }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: item.x, y: item.y }}
            >
              <Image
                src={item.logo}
                alt={`Logo of ${item.title}`}
                width={0}
                height={0}
                className={`w-20 h-20 lg:w-24 lg:h-24 row-start-1 row-end-3 ${
                  checkIfLogo(item.title) ? 'grayscale invert' : ''
                }`}
              />
              <p className="row-start-3 text-lg font-bold text-light">{item.title}</p>
            </motion.li>
          );
        })}
      </ul>
      <motion.div transition={{ delay: 1.2 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Typography className="text-center z-10" variant="h2">
          And much more...
        </Typography>
      </motion.div>
    </article>
  );
};

export default MainTech;
