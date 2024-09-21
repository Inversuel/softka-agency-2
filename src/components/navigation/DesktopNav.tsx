import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import { Typography } from '../UI/typography';
import { ThemeToggle } from '../theme-toggle';

export const DesktopNav = (): JSX.Element => {
  return (
    <nav className="hidden lg:flex w-full align-middle items-center justify-between lg:px-24 px-4">
      <Logo className="flex self-start cursor-pointer" />
      <div className="flex gap-7 align-middle justify-end items-center min-w-[614px] relative">
        <Link href="/">
          <Typography type="denike" className="text-3xl hover-underline-animation">
            Home
          </Typography>
        </Link>
        <Link href="/projects">
          <Typography type="denike" className="text-3xl hover-underline-animation">
            Projects
          </Typography>
        </Link>
        <Link href="contact">
          <Typography type="denike" className="text-3xl hover-underline-animation">
            Contact
          </Typography>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};
