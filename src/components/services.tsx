import React, { useState } from 'react';
import Tags from './UI/tags';
import { Card, LayoutGrid } from './UI/layout-grid';
import { Typography } from './UI/typography';

const Services = () => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <section className="relative w-screen my-2 md:my-12 lg:my-24 2xl:max-w-8xl 2xl:self-center px-4 md:px-12 lg:px-24">
      <div className="h-screen w-full">
        <LayoutGrid
          cards={cards}
          selected={selected}
          setSelected={setSelected}
          lastSelected={lastSelected}
          setLastSelected={setLastSelected}
          handleClick={handleClick}
          handleOutsideClick={handleOutsideClick}
        />
      </div>
    </section>
  );
};

export default Services;

const SkeletonOne = () => {
  const data = {
    headline: 'FROM SMALL TO LARGE',
    title: 'Custom Website',
    description:
      'Elevate your online presence with our premier web development outsourcing service. Our skilled developers are dedicated to crafting dynamic, responsive websites that align with your business goals.',
    technology: 'React, Next.js, Firebase, AWS, HTML, CSS, Typescript, Strapi',
  };
  const listOfTechnologies = data.technology.split(', ');

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Typography variant="h2" weight="semibold" type="denike">
        {data.title}
      </Typography>
      <Typography type="denike">{data.description}</Typography>
      <Tags containerClassName="flex justify-center" array={listOfTechnologies} />
    </div>
  );
};

const SkeletonTwo = () => {
  const data = {
    title: 'Mobile Development',
    headline: 'hight dynamic, global fast',
    description:
      'Revolutionize your mobile presence with our cutting-edge mobile development outsourcing service. Our skilled developers are committed to crafting high-performance, user-friendly apps tailored to your unique needs.',
    technology: 'React Native, Expo, Firebase, AWS, Typescript',
  };
  const listOfTechnologies = data.technology.split(', ');

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Typography variant="h2" weight="semibold" type="denike">
        {data.title}
      </Typography>
      <Typography type="denike">{data.description}</Typography>
      <Tags containerClassName="flex justify-center" array={listOfTechnologies} />
    </div>
  );
};
const SkeletonThree = () => {
  const data = {
    id: 'gas321as32',
    title: 'E-commerce',
    headline: 'start working online',
    description:
      "Transforming clicks into customers, our E-commerce service for website agencies unlocks the power of online sales. Seamlessly integrating intuitive design with robust functionality, we help your clients build dynamic digital storefronts that drive conversions and revenue growth.",
    technology: 'Next.js, Shopify, Stripe, Paypal, Przelewy24, Woocommerce',
    icon: '/img/service/design.jpg',
  };
  const listOfTechnologies = data.technology.split(', ');

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Typography variant="h2" weight="semibold" type="denike">
        {data.title}
      </Typography>
      <Typography type="denike">{data.description}</Typography>
      <Tags containerClassName="flex justify-center" array={listOfTechnologies} />
    </div>
  );
};
const SkeletonFour = () => {
  const data = {
    id: 'gas321as312',
    title: 'SEO/Optimalization',
    description:
      'Elevate your projects with our premium service. Tap into top-tier developers committed to turning your vision into reality. Benefit from cost-effective solutions, flexible engagement models, and a client-centric approach.',
    technology: 'Front-End, Full-Stack',
    icon: '/img/service/outsourcing.jpg',
  };
  const listOfTechnologies = data.technology.split(', ');

  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Typography variant="h2" weight="semibold" type="denike">
        {data.title}
      </Typography>
      <Typography type="denike">{data.description}</Typography>
      <Tags containerClassName="flex justify-center" array={listOfTechnologies} />
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'md:col-span-2',
    thumbnail: '/img/service/webdev.jpg',
    header: 'Custom Website',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/img/service/mobile.jpg',
    header: 'Mobile Development',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/img/service/design.jpg',
    header: 'E-commerce',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '/img/service/outsourcing.jpg',
    header: 'SEO/Optimalization',
  },
];
