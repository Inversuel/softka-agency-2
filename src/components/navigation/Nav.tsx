import React from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

const Nav = (): JSX.Element => {
  return (
    <header className="z-50 lg:py-12 py-4 flex justify-between align-middle items-center 2xl:mx-auto 2xl:max-w-8xl 2xl:min-w-[90rem]">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Nav;
