import React from 'react';
import { twMerge } from 'tailwind-merge';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Headline = ({ children, className }: Props): JSX.Element => {
  const textRef = React.useRef(null);
  const twMergeClass = twMerge('font-montserrat md:text-5xl lg:text-7xl text-3xl font-bold opacity-25 mb-10 lg:mb-28', className);

  useIsomorphicLayoutEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        opacity: 0.9,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }, textRef);
    return () => ctx.revert();
  }, [textRef.current]);

  return (
    <h1 ref={textRef} className={twMergeClass}>
      {children}
    </h1>
  );
};

export default Headline;
