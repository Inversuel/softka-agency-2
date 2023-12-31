'use client';

import React from 'react';
import Image from 'next/image';

const MainTech = (): JSX.Element => {
  const topTech = [
    [
      { title: 'React.js', logo: '/logo/logo-react.svg' },
      { title: 'React Native', logo: '/logo/logo-react.svg' },
      { title: 'Next.js', logo: '/logo/logo-next.svg' },
      { title: 'TailwindCss', logo: '/logo/logo-tailwindcss-name.svg' },
      { title: 'Photoshop', logo: '/logo/logo-ps.svg' },
    ],
    [
      { title: 'Firebase', logo: '/logo/logo-firebase.svg' },
      { title: 'Aws', logo: '/logo/logo-aws.svg' },
      { title: 'Google Cloud', logo: '/logo/logo-gcp.png' },
    ],
    [
      { title: 'Strapi', logo: '/logo/logo-strapi.svg' },
      { title: 'Wordpress', logo: '/logo/logo-wp.png' },
      { title: 'Shopify', logo: '/logo/logo-shopify.png' },
    ],
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
    <article className="flex flex-col gap-14 z-[2] p-4 md:p-12 lg:p-20 backdrop-blur-lg rounded-3xl h-full w-full bg-brand bg-clip-padding backdrop-filter bg-opacity-10">
      {topTech.map((tech, i) => {
        return (
          <ul
            key={i}
            className="flex flex-row flex-wrap md:flex-row gap-2 md:gap-6 items-center justify-center"
          >
            {tech.map((item, i) => {
              return (
                <li
                  key={i + 999}
                  className="grid grid-cols-1 grid-rows-3 place-items-center items-center min-h-[116px] min-w-[116px]"
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
                  <p className="row-start-3 text-lg md:text-xl lg:text-xl font-bold">
                    {item.title}
                  </p>
                </li>
              );
            })}
          </ul>
        );
      })}
    </article>
  );
};

export default MainTech;
