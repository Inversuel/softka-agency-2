import React from 'react';
import { Container } from '../Container';
import Headline from '../UI/Headline';
import MainTech from './MainTech';

const Tech = (): JSX.Element => {
  return (
    <Container className="self-center 2xl:overflow-hidden 2xl:max-w-8xl relative second-section lg:p-24 px-4 md:px-12 py-10 w-screen min-h-screen-2/3 flex flex-col gap-10">
      <Headline className="z-10 lg:max-w-[80%] mb-0 lg:mb-0">Technologies We Specialize</Headline>
      <MainTech />
    </Container>
  );
};

export default Tech;
