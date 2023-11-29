import React, { useEffect, useRef } from 'react';
import Link, { LinkProps } from 'next/link';
import gsap from 'gsap';
interface LinkButtonProps extends LinkProps {
  href: string;
  text: string;
}

const LinkButton = ({ href, text, ...props }: LinkButtonProps): JSX.Element => {
  const refButton = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refButton?.current === null) return;
    window.addEventListener('mousemove', (e) => {
      const rect = refButton.current?.getBoundingClientRect();

      const { clientX, clientY } = e;
      const x = Math.round(((clientX - rect?.x) / rect?.width) * 100);
      const y = Math.round(((clientY - rect?.y) / rect?.height) * 100);
      gsap.to(refButton?.current, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out',
      });
    });
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
