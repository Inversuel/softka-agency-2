import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 | Not found',
  description: 'Please return to home page',
};
const NotFoundPage = () => {
  return (
    <section>
      <div className="w-screen h-screen p-4 flex flex-col gap-5 xl:gap-10 items-start md:p-12 lg:items-center lg:align-middle lg:justify-center">
        <span className="text-8xl xl:text-[176px] font-montserrat font-bold from-brand to-light bg-gradient-to-br inline-block bg-clip-text text-transparent my-20">
          404
        </span>
        <h1 className="font-poppins text-3xl xl:text-6xl font-semibold">We sincerely apologize.</h1>
        <p className="font-poppins text-xl xl:text-3xl">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="text-xl xl:text-3xl xl:py-6 xl:px-16 bg-brand rounded-3xl py-3 px-10 font-semibold cursor-pointer"
        >
          Go to homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
