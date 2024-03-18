import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LogoSvg } from '@/svg';
interface LogoProps {
  className: string;
  refProp?: React.MutableRefObject<null | HTMLDivElement>;
}

const Logo = ({ className, refProp }: LogoProps): JSX.Element => {
  const mergeClass = cn('flex gap-2 items-center', className);

  return (
    <div ref={refProp} className={mergeClass}>
      <Link href="/" aria-label="link to the home page">
        <LogoSvg className="bg-foreground hover:bg-background text-background fill-background hover:fill-foreground stroke-background hover:stroke-foreground duration-200 w-14 h-14 p-2 rounded-full" />
      </Link>
    </div>
  );
};

export default Logo;
{
  /* <LogoSvg className="" /> */
}
