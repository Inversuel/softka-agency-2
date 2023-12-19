import { FaArrowDown } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import gsap from 'gsap';

interface Props {
  className?: string;
  refProp?: React.MutableRefObject<HTMLDivElement | null>;
}

const ScrollIndicator = ({ className, refProp }: Props): JSX.Element => {
  const arrowRef = useRef(null);
  const classMerge = twMerge('w-full flex justify-center items-end relative', className);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(
        arrowRef.current,
        {
          transform: 'translateY(40px)',
          duration: 3,
          ease: 'linear',
        },
        '<'
      );
      tl.to(
        arrowRef.current,
        {
          opacity: 1,
          duration: 1.5,
          ease: 'linear',
        },
        '<10%'
      );
      tl.to(
        arrowRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: 'linear',
        },
        '<50%'
      );
    }, arrowRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className={classMerge} ref={refProp}>
      <div className="border relative border-lightest rounded-3xl w-10 h-16 grid place-items-center">
        <div ref={arrowRef} className="-translate-y-8 opacity-0">
          <FaArrowDown size={18} className="" />
        </div>
      </div>
    </div>
  );
};
export default ScrollIndicator;
