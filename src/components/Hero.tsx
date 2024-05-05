import React from 'react';
import { Typography, typographyVariants } from './ui/typography';
import { Spotlight } from './ui/spotlight';
import { ContainerScroll } from './ui/container-scroll-animation';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = (): JSX.Element => {
  return (
    <section className="relative 2xl:max-w-8xl 2xl:self-center">
      <Spotlight className="-top-10 left-[31rem]" fill="hsl(var(--foreground))" />
      <div className="lg:pt-12 lg:px-24 md:pt-8 md:px-12 p-4 w-full flex flex-col items-center text-center gap-10">
        <Typography
          variant="h1"
          type="denike"
          weight="semibold"
          className="uppercase max-w-xl animate-fade-down animate-duration-500 animate-delay-500 animate-ease-in-out"
        >
          Soft Transition To The WEB
        </Typography>
        <TextGenerateEffect
          fontClassName={typographyVariants({
            variant: 'h2',
            type: 'milston',
            className: 'opacity-0 capitalize max-w-xl',
          })}
          words="Transforming Digital Dreams into Seamless Realities. Your Vision, Our Expertise"
        />
      </div>
      <ContainerScroll src="/img/project/freedayalone.webp" />
    </section>
  );
};

export default Hero;
