import Link, { LinkProps } from 'next/link';
import React from 'react';

interface KMLink extends LinkProps {
  children: React.ReactNode;
}

const KMLink = ({ children, ...props }: KMLink) => {
  return (
    <Link
      {...props}
      className="text-lightest font-montserrat font-bold text-lg hover:text-brand transition ease-in duration-200"
    >
      {children}
    </Link>
  );
};

export default KMLink;
