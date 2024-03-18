import React from 'react';
import Tags from './ui/tags';
import { LayoutGrid } from './ui/layout-grid';
import { Typography } from './ui/typography';

// ACCORDION ??
const Services = () => {
  return (
    <section className="relative w-screen 2xl:max-w-8xl 2xl:self-center px-4 md:px-12 lg:px-24">
      <div className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Services;

const SkeletonOne = () => {
  const data = {
    headline: 'FROM SMALL TO LARGE',
    title: 'Web Development',
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
    title: 'UI/UX Design',
    headline: 'express your ideas',
    description:
      ' Our skilled designers are dedicated to bringing your vision to life, ensuring seamless and visually captivating digital interactions. Ready to transform your user interface? Contact us today for a journey of design innovation.',
    technology: 'Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator',
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
    title: 'Development',
    description:
      'Elevate your projects with our premier outsourcing service. Tap into top-tier developers committed to turning your vision into reality. Benefit from cost-effective solutions, flexible engagement models, and a client-centric approach.',
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
    header: 'Web Development'
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/img/service/mobile.jpg',
    header: 'Mobile Development'
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/img/service/design.jpg',
    header: 'UI/UX Design'
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'md:col-span-2',
    thumbnail: '/img/service/outsourcing.jpg',
    header: 'Development'
  },
];

// interface ServiceItemProps {
//   title: string;
//   description: string;
//   technology: string;
//   icon: string;
//   headline?: string;
//   reverse?: boolean;
// }

// type ServiceItemType = {
//   id: string;
//   title: string;
//   description: string;
//   technology: string;
//   icon: string;
//   headline?: string;
// };

// const ServiceItemMobile = ({
//   title,
//   description,
//   technology,
//   icon,
//   headline,
// }: ServiceItemProps) => {
//   const listOfTechnologies = technology.split(', ');
//       <Tags array={listOfTechnologies} />

//   return (
//     <section className="flex flex-col items-start justify-center w-full gap-5">
//       <span className=" uppercase font-extrabold text-sm mb-5">{headline}</span>
//       <div className=" relative w-44 aspect-square rounded-3xl">
//         <Image
//           src={icon}
//           fill
//           alt={title}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           className="rounded-3xl"
//         />
//       </div>
//       <h3 className=" mb-2 text-2xl font-bold">{title}</h3>
//       <p className=" mb-4 text-left">{description}</p>
//       <Tags array={listOfTechnologies} />
//     </section>
//   );
// };

// const ServiceItem = ({
//   title,
//   description,
//   technology,
//   icon,
//   headline,
//   reverse,
// }: ServiceItemProps) => {
//   const listOfTechnologies = technology.split(', ');

//   return (
//     <section className="flex flex-col items-start justify-center w-full gap-5">
//       <span className="  uppercase font-extrabold text-sm mb-5">{headline}</span>
//       <div className="grid grid-cols-3 grid-rows-1 items-center justify-center">
//         <div
//           className={`  ${
//             reverse
//               ? 'col-start-1 col-end-3 row-start-1'
//               : 'col-start-2 col-end-4 row-start-1 justify-self-end'
//           } relative w-80 lg:w-96 xl:w-[580px] aspect-square rounded-3xl`}
//         >
//           <Image src={icon} fill alt={title} className="rounded-3xl" />
//         </div>
//         <div
//           className={`${
//             reverse ? 'col-start-2 col-end-4 row-start-1' : 'col-start-1 col-end-3 row-start-1'
//           } z-10 flex flex-col gap-5 justify-center items-start lg:backdrop-blur-xl lg:p-5 lg:rounded-3xl xl:p-10 xl:rounded-3xl
//            bg-brand bg-clip-padding backdrop-filter bg-opacity-20 border border-lightest
//           `}
//         >
//           <Title className=" mb-2">{title}</Title>
//           <Description className=" mb-4">{description}</Description>
//           <Tags array={listOfTechnologies} containerClassName="flex gap-3 flex-wrap " />
//         </div>
//       </div>
//     </section>
//   );
// };
