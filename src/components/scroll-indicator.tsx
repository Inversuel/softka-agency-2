import { FaArrowDown } from 'react-icons/fa';
import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  refProp?: React.MutableRefObject<HTMLDivElement | null>;
}

const ScrollIndicator = ({ className, refProp }: Props): JSX.Element => {
  const classMerge = cn('w-full flex justify-center items-end relative', className);


  return (
    <div className={classMerge} ref={refProp}>
      <div className="border relative border-lightest rounded-3xl w-10 h-16 grid place-items-center">
        <div>
          <FaArrowDown size={18} />
        </div>
      </div>
    </div>
  );
};
export default ScrollIndicator;
