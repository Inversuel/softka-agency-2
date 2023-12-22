import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Headline from './UI/Headline';
gsap.registerPlugin(ScrollTrigger);

const WhyUs = (): JSX.Element => {
  const main = useRef(null);
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const balls = gsap.utils.toArray<HTMLDivElement>('.km-ball').slice(0, -1);
      const textes = gsap.utils.toArray<HTMLDivElement>('.km-title-text');
      const descriptions = gsap.utils.toArray<HTMLDivElement>('.km-title-description');

      balls.forEach((ball) => {
        gsap.to(ball, {
          y: 208 + 144,
          ease: 'none',
          scrollTrigger: {
            trigger: ball,
            start: 'center center',
            end: '352 center',
            scrub: true,
          },
        });
      });
      textes.forEach((text) => {
        gsap.to(text, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
      descriptions.forEach((description) => {
        gsap.to(description, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: description,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const text = [
    {
      title: 'Establish your needs',
      description:
        "We'll discuss your project requirements, challenges, and our approach to demonstrate how we can assist you.",
    },
    {
      title: 'Initial analysis',
      description:
        "We'll assess your idea, defining the project scope and identifying optimal technologies to meet your requirements.",
    },
    {
      title: 'Proposal and plan of action',
      description:
        'We will present you with a proposal for your project. Set priorities and talk about the budget and start dates of work.',
    },
    {
      title: 'Development',
      description:
        'We will work together to develop your project. We will have weekly meetings to show you the progress and make the necessary adjustments.',
    },
    {
      title: 'Delivery',
      description:
        'We will deliver your project and we will be available to support you in case you need it.',
    },
    {
      title: 'Maintenance',
      description: 'We will be available to support you in case you need it.',
    },
  ];

  return (
    <section className="w-screen px-4 md:px-12" ref={main}>
      <Headline className="mb-6">How We Work</Headline>
      <div className="flex flex-col gap-52 w-full mt-20" ref={container}>
        {text.map((item, index) => (
          <div key={item.title} className="grid grid-cols-3 w-full h-36 content-center">
            <h2 className="font-montserrat text-lg font-bold text-left opacity-10 km-title-text">
              {item.title}
            </h2>
            <div
              className={`w-5 h-5 bg-lightest justify-self-center self-center place-self-center rounded-full km-ball km-ball-${index}`}
            />
            <p className="font-montserrat text-base text-right max-w-md opacity-10 km-title-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
