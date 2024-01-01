'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NextBreadcrumbProps {
  padding?: boolean;
}

const NextBreadcrumb = ({ padding = true }: NextBreadcrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className={`2xl:max-w-8xl ${padding ? 'px-4 lg:px-24' : ''}`}>
      <ul className="flex py-5">
        <li className="hover-underline-animation mx-2 font-bold">
          <Link href={'/'}>Home</Link>
        </li>
        {pathNames.length > 0 && <span> / </span>}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const itemClasses =
            paths === href
              ? `${'mx-2 font-bold'} ${'underline'}`
              : 'hover-underline-animation mx-2 font-bold';
          const itemLink = link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && <span> / </span>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
