import React, { useRef } from 'react';
import Link, { LinkProps } from 'next/link';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import { twMerge } from 'tailwind-merge';
interface LinkButtonProps extends LinkProps {
  href: string;
  text: string;
}

const LinkButton = ({ href, text, ...props }: LinkButtonProps): JSX.Element => {
  const refButton = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (refButton?.current === null) return;
      window.addEventListener('mousemove', (e) => {
        const rect = refButton.current?.getBoundingClientRect();

        const { clientX, clientY } = e;
        const x = Math.round(((clientX - (rect?.x || 0)) / (rect?.width || 0)) * 100);
        const y = Math.round(((clientY - (rect?.y || 0)) / (rect?.height || 0)) * 100);
        gsap.to(refButton?.current, {
          '--x': `${x}%`,
          '--y': `${y}%`,
          duration: 0.3,
          ease: 'sine.out',
        });
      });
    }, refButton);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={refButton} className="relative w-52">
      <Link href={href} {...props}>
        <button className="py-4 px-10 rounded-3xl text-2xl font-semibold text-lightest flex flex-row gap-2 items-center border border-lightest">
          {text}
        </button>
      </Link>
      <Link href={href} {...props}>
        <button className="absolute top-0 left-0 scale-105 py-4 px-10 rounded-3xl text-2xl font-semibold text-dark bg-light flex flex-row gap-2 items-center cm-overlay">
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
  const classMerge = twMerge('relative w-52', className);
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
