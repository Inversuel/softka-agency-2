import React from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

const Nav = (): JSX.Element => {
  return (
    <header className="lg:py-12 py-4 flex justify-between align-middle items-center 2xl:mx-auto 2xl:max-w-8xl 2xl:min-w-[90rem] bg-background animate-fade-down animate-duration-1000 animate-delay-300 animate-ease-in-out">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Nav;
