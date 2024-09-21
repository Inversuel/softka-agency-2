import React, { useRef } from 'react';
import Headline from './UI/headline';
import Title from './UI/title';
import Description from './UI/description';

const WhyUs = (): JSX.Element => {
  const main = useRef(null);
  const container = useRef(null);

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
    <section className="w-screen px-4 md:px-12 lg:px-24  2xl:max-w-8xl self-center" ref={main}>
      <Headline className="mb-6">How We Work</Headline>
      <div className="flex flex-col gap-52 w-full mt-20" ref={container}>
        {text.map((item) => (
          <div key={item.title} className="grid grid-cols-3 w-full h-36 content-center">
            <Title className="text-left opacity-10">{item.title}</Title>
            <div
              className={`w-5 h-5 bg-lightest justify-self-center self-center place-self-center rounded-full`}
            />
            <Description className="text-right max-w-md opacity-10">{item.description}</Description>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
