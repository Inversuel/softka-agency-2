import React, { useRef } from 'react';
import Headline from './UI/Headline';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import gsap from 'gsap';
import Title from './UI/Title';
import Description from './UI/Description';
import Tags from './UI/Tags';

// ACCORDION ??
const Services = () => {
  const items: ServiceItemType[] = [
    {
      id: '421das',
      headline: 'FROM SMALL TO LARGE',
      title: 'Web Development',
      description:
        'Elevate your online presence with our premier web development outsourcing service. Our skilled developers are dedicated to crafting dynamic, responsive websites that align with your business goals.',
      technology: 'React, Next.js, Firebase, AWS, HTML, CSS, Typescript, Strapi',
      icon: '/img/service/webdev.png',
    },
    {
      id: '431das312',
      title: 'Mobile Development',
      headline: 'hight dynamic, global fast',
      description:
        'Revolutionize your mobile presence with our cutting-edge mobile development outsourcing service. Our skilled developers are committed to crafting high-performance, user-friendly apps tailored to your unique needs.',
      technology: 'React Native, Expo, Firebase, AWS, Typescript',
      icon: '/img/service/mobile.png',
    },
    {
      id: 'gas321as32',
      title: 'UI/UX Design',
      headline: 'express your ideas',
      description:
        ' Our skilled designers are dedicated to bringing your vision to life, ensuring seamless and visually captivating digital interactions. Ready to transform your user interface? Contact us today for a journey of design innovation.',
      technology: 'Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator',
      icon: '/img/service/design.png',
    },
    {
      id: 'gas321as312',
      title: 'Development',
      description:
        'Elevate your projects with our premier outsourcing service. Tap into top-tier developers committed to turning your vision into reality. Benefit from cost-effective solutions, flexible engagement models, and a client-centric approach.',
      technology: 'Front-End, Full-Stack',
      icon: '/img/service/outsourcing.png',
    },
  ];
  return (
    <section className="relative w-screen 2xl:max-w-8xl 2xl:self-center px-4 md:px-12 lg:px-24">
      <Headline>Services</Headline>
      <div className="flex md:hidden flex-col gap-20">
        {items.map((item) => (
          <ServiceItemMobile key={item.id} {...item} />
        ))}
      </div>
      <div className="hidden md:flex flex-col gap-20">
        {items.map((item, index) => (
          <ServiceItem key={item.id} {...item} reverse={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Services;

interface ServiceItemProps {
  title: string;
  description: string;
  technology: string;
  icon: string;
  headline?: string;
  reverse?: boolean;
}

type ServiceItemType = {
  id: string;
  title: string;
  description: string;
  technology: string;
  icon: string;
  headline?: string;
};

const ServiceItemMobile = ({
  title,
  description,
  technology,
  icon,
  headline,
}: ServiceItemProps) => {
  const listOfTechnologies = technology.split(', ');
  const main = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headline = gsap.utils.toArray<HTMLDivElement>('.km-headline');
      const image = gsap.utils.toArray<HTMLDivElement>('.km-image');
      const title = gsap.utils.toArray<HTMLDivElement>('.km-title');
      const desc = gsap.utils.toArray<HTMLDivElement>('.km-desc');
      const tags = gsap.utils.toArray<HTMLDivElement>('.km-tags');

      headline.forEach((headline) => {
        gsap.to(headline, {
          opacity: 0.3,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      image.forEach((image) => {
        gsap.to(image, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      title.forEach((title) => {
        gsap.to(title, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      desc.forEach((desc) => {
        gsap.to(desc, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: desc,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      tags.forEach((tag) => {
        gsap.to(tag, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tag,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={main} className="flex flex-col items-start justify-center w-full gap-5">
      <h5 className="km-headline -translate-x-10 opacity-0 uppercase font-extrabold text-sm mb-5">
        {headline}
      </h5>
      <div className="km-image -translate-x-10 opacity-0 relative w-44 aspect-square rounded-3xl">
        <Image
          src={icon}
          fill
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-3xl"
        />
      </div>
      <h3 className="km-title -translate-x-10 opacity-0 mb-2 text-2xl font-bold">{title}</h3>
      <p className="km-desc -translate-x-10 opacity-0 mb-4 text-left">{description}</p>
      <Tags array={listOfTechnologies} containerClassName=" km-tags -translate-x-10 opacity-0" />
    </section>
  );
};

const ServiceItem = ({
  title,
  description,
  technology,
  icon,
  headline,
  reverse,
}: ServiceItemProps) => {
  const listOfTechnologies = technology.split(', ');
  const main = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headline = gsap.utils.toArray<HTMLDivElement>('.km-headline');
      const image = gsap.utils.toArray<HTMLDivElement>('.km-image');
      const title = gsap.utils.toArray<HTMLDivElement>('.km-title');
      const desc = gsap.utils.toArray<HTMLDivElement>('.km-desc');
      const tags = gsap.utils.toArray<HTMLDivElement>('.km-tags');

      headline.forEach((headline) => {
        gsap.to(headline, {
          opacity: 0.3,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headline,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      image.forEach((image) => {
        gsap.to(image, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      title.forEach((title) => {
        gsap.to(title, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      desc.forEach((desc) => {
        gsap.to(desc, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: desc,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      tags.forEach((tag) => {
        gsap.to(tag, {
          opacity: 1,
          duration: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tag,
            start: 'top 80%',
            end: 'bottom 10%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="flex flex-col items-start justify-center w-full gap-5">
      <h5 className="km-headline -translate-x-10 opacity-0  uppercase font-extrabold text-sm mb-5">
        {headline}
      </h5>
      <div className="grid grid-cols-3 grid-rows-1 items-center justify-center">
        <div
          className={`km-image -translate-x-10 opacity-0  ${
            reverse
              ? 'col-start-1 col-end-3 row-start-1'
              : 'col-start-2 col-end-4 row-start-1 justify-self-end'
          } relative w-80 lg:w-96 xl:w-[580px] aspect-square rounded-3xl`}
        >
          <Image src={icon} fill alt={title} className="rounded-3xl" />
        </div>
        <div
          className={`${
            reverse ? 'col-start-2 col-end-4 row-start-1' : 'col-start-1 col-end-3 row-start-1'
          } z-10 flex flex-col gap-5 justify-center items-start xl:backdrop-blur-xl xl:p-10 xl:rounded-3xl`}
        >
          <Title className="km-title -translate-x-10 opacity-0 mb-2">{title}</Title>
          <Description className="km-desc -translate-x-10 opacity-0 mb-4">
            {description}
          </Description>
          <Tags
            array={listOfTechnologies}
            containerClassName="flex gap-3 flex-wrap km-tags -translate-x-10 opacity-0"
          />
        </div>
      </div>
    </div>
  );
};
