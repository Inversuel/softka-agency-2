'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import Image from 'next/image';

export const ContainerScroll = ({ src }: { src: string }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      className="h-[60rem] flex items-center justify-center relative p-2 md:p-10"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <ImageContainer scale={scale} rotate={rotate} img={src} />
      </div>
    </div>
  );
};

const ImageContainer = ({
  img,
  rotate,
  scale,
}: {
  img: string;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate, // rotate in X-axis
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="bg-gray-100 h-full w-full rounded-2xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden p-4 relative">
        <Image src={img} alt="image of work" fill />
      </div>
    </motion.div>
  );
};

