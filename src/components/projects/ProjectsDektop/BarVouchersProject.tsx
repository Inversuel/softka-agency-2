import { useRef } from 'react';
import Image from 'next/image';
import LinkButton from '../../UI/LinkButton';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';
import Tags from '@/components/UI/Tags';

interface BarVouchersProjectProps {
  triggerTimeline?: gsap.core.Tween;
}

export const BarVouchersProject = ({ triggerTimeline }: BarVouchersProjectProps): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLDivElement>(null);
  const tagsArray =
    'React Native, React Hook Form,React Query, Stripe, Typescript, Figma, Firebase'.split(',');

  useIsomorphicLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(imageRef.current, {
        duration: 1,
        ease: 'power3.inOut',
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: textRef.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
        },
        id: '1',
      });
      gsap.to(imageRef2.current, {
        duration: 1,
        ease: 'power3.inOut',
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: imageRef2.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
        },
        id: '2',
      });
      gsap.to(textRef.current, {
        duration: 1,
        ease: 'power3.inOut',
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        scrollTrigger: {
          trigger: imageRef2.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
        },
        id: '3',
      });
    }, main);
    return () => context.revert();
  }, [triggerTimeline]);
  return (
    <section
      ref={main}
      className="h-screen w-screen p-12 grid grid-cols-5 flex-shrink-0 itemScroll"
    >
      <div className="w-full h-full col-start-1 col-end-3 row-start-1 grid place-items-center">
        <Image
          ref={imageRef2}
          width={1000}
          height={875}
          src="/img/barVoucherIphone.png"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d hover:z-10 opacity-0 cm-clip-path-left-0"
        />
      </div>
      <div
        ref={textRef}
        className="col-start-2 col-end-5 row-start-1 flex flex-col p-11 gap-10 justify-center items-start 2xl:items-center backdrop-blur-lg opacity-0 cm-clip-path-left-0"
      >
        <div>
          <Title>Bar Voucher Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <Description className="max-w-xl">
                <span className="text-brand">BarVoucher</span> Your gateway to exclusive discounts
                at premier bars and restaurants across your city. App provides a filter of bars,
                city, distance from a device, and a map view of the bars.
                <span className="font-semibold">Soon available on IOS and Android</span>
              </Description>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <Tags array={tagsArray} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButton href="projects/barvoucher" text="Learn More" />
      </div>
      <div className="col-start-4 col-end-6 row-start-1 w-full h-full grid place-items-center">
        <Image
          ref={imageRef}
          width={1000}
          height={875}
          src="/img/barVoucherIphone2.png"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d z-10 opacity-0 cm-clip-path-left-0"
        />
      </div>
    </section>
  );
};
