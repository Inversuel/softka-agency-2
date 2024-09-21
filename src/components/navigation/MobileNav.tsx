import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';

export const MobileNav = (): JSX.Element => {
  return (
    <nav role="navigation" className="lg:hidden relative w-full h-16 z-[99]">
      <div
        id="menuToggle"
        className="flex flex-col relative left-6 top-6 z-[1] select-none transition-menu ease-menu-ease"
      >
        <Logo className="cursor-pointer fixed top-[30px] right-4" />
        <input
          type="checkbox"
          className="flex justify-between w-10 h-10 fixed cursor-pointer opacity-0 z-[2]"
        />
        <span className="fixed top-10 flex w-[29px] h-[2px] mb-2 bg-lightest rounded-sm z-[1] transition-menu ease-menu-ease"></span>
        <span className="fixed top-[50px] flex w-[20px] h-[2px] mb-2 bg-lightest rounded-sm z-[1] transition-menu ease-menu-ease"></span>
        <span className="fixed top-[60px] flex w-[29px] h-[2px] mb-2 bg-lightest rounded-sm z-[1] transition-menu ease-menu-ease"></span>
        <ul
          id="menu"
          className="fixed inset-0 -ml-[24px] -mt-10 p-10 bg-dark origin-[0%_0%] -translate-x-full transition-menu ease-menu-ease flex flex-col items-center gap-8 justify-center"
        >
          <li className="delay-[2s] px-0 py-2.5">
            <Link className="text-3xl" href="/">
              Homes
            </Link>
          </li>
          <li className="delay-[2s] px-0 py-2.5">
            <Link className="text-3xl" href="/projects">
              Projects
            </Link>
          </li>
          <li className="delay-[2s] px-0 py-2.5">
            <Link className="text-3xl" href="#contact">
              Contact
            </Link>
          </li>
          <li className="delay-[2s] px-0 py-2.5">
            <button className="py-3 px-12 bg-brand text-lightest rounded-3xl hover:scale-105 hover:shadow-xl">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
