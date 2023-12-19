import React from 'react';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

const Nav = (): JSX.Element => {
  return (
    <header className="lg:py-12 py-4 flex justify-between align-middle items-center">
      <DesktopNav />
      <MobileNav />
    </header>
  );
};

export default Nav;
