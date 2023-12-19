import Link, { LinkProps } from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface KMLink extends LinkProps {
  children: React.ReactNode;
  refProp?: React.MutableRefObject<null | HTMLAnchorElement>;
  className?: string;
}

const KMLink = ({ children, refProp, className, ...props }: KMLink): JSX.Element => {
  const mergeClass = twMerge(
    'text-lightest font-montserrat font-bold text-lg hover:text-brand transition-colors ease-in duration-200',
    className
  );
  return (
    <Link {...props} ref={refProp} className={mergeClass}>
      {children}
    </Link>
  );
};

export default KMLink;
