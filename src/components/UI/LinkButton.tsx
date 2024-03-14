import React from 'react';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';
interface LinkButtonProps extends LinkProps {
  href: string;
  text: string;
}

const LinkButton = ({ href, text, ...props }: LinkButtonProps): JSX.Element => {
  return (
    <div className="relative w-60">
      <Link href={href} {...props} >
        <button className="py-4 px-10 rounded-3xl text-2xl font-semibold text-lightest flex flex-row gap-2 items-center border border-lightest hover:scale-105">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default LinkButton;

interface LinkButtonMobileProps {
  href: string;
  text: string;
  refProp?: React.MutableRefObject<HTMLDivElement | null>;
  className?: string;
}

export const LinkButtonMobile = ({
  href,
  text,
  refProp,
  className,
}: LinkButtonMobileProps): JSX.Element => {
  const classMerge = cn('relative w-52', className);
  return (
    <div ref={refProp} className={classMerge}>
      <Link href={href}>
        <button className="py-4 px-10 rounded-3xl text-2xl font-semibold bg-dark dark:bg-transparent text-lightest flex flex-row gap-2 items-center border border-lightest">
          {text}
        </button>
      </Link>
    </div>
  );
};

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const Button = ({ text, onClick }: ButtonProps): JSX.Element => {
  return (
    <div className="relative w-52" onClick={onClick}>
      <button className="py-4 px-10 rounded-3xl text-2xl font-semibold text-lightest flex flex-row gap-2 items-center border border-lightest">
        {text}
      </button>
      <button className="absolute top-0 left-0 scale-105 py-4 px-10 rounded-3xl text-2xl font-semibold text-dark bg-light flex flex-row gap-2 items-center cm-overlay">
        {text}
      </button>
    </div>
  );
};
