import { useRef } from 'react';
import Image from 'next/image';
import LinkButton, { LinkButtonMobile } from '../../UI/LinkButton';
import gsap from 'gsap';
import Title from '@/components/UI/Title';
import Description from '@/components/UI/Description';
import Tags from '@/components/UI/Tags';
import { useIsomorphicLayoutEffect } from '@/helpers/isomorphicEffect';

export const BarVouchersProjectMobile = (): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const arrayTags =
    'React Native, React Hook Form,React Query, Stripe, Typescript, Figma, Firebase'.split(',');

  useIsomorphicLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(techRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: techRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(descRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(imageRef2.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef2.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 1,
        x: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 10%',
          toggleActions: 'play reverse play reverse',
        },
      });
    });
    return () => context.revert();
  }, []);

  return (
    <section className="w-screen my-12 px-4 md:px-12 flex flex-col ">
      <div className="w-full h-full col-start-1 col-end-3 row-start-1 grid place-items-center">
        <Image
          ref={imageRef2}
          width={1000}
          height={875}
          src="/img/barVoucherIphone.png"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d hover:z-10 active:z-10 opacity-0 translate-x-20"
        />
      </div>
      <div className="flex flex-col p-4 gap-10 justify-center items-start backdrop-blur-lg">
        <div>
          <Title refProp={titleRef} className="text-4xl opacity-0 translate-x-20">
            Bar Voucher Project
          </Title>
          <div className="flex flex-col gap-4">
            <div ref={descRef} className="flex flex-col opacity-0 translate-x-20">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <Description className="text-lg max-w-xs">
                <span className="text-brand">BarVoucher</span> is Your gateway to exclusive
                discounts at premier bars and restaurants across your city. App provides a filter of
                bars, city, distance from a device, and a map view of the bars.
              </Description>
              <span className="text-lg font-semibold">Soon available on IOS and Android</span>
            </div>
            <div ref={techRef} className="flex flex-col gap-3 max-w-xs opacity-0 translate-x-20">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <LinkButtonMobile
          refProp={buttonRef}
          href="projects/barvoucher"
          text="Learn More"
          className="opacity-0 translate-x-20"
        />
      </div>
      <div className="relative w-full h-[30rem] md:h-[40rem] grid place-items-center -mt-10">
        <Image
          ref={imageRef}
          fill
          src="/img/barVoucherIphone2.png"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d z-10 opacity-0 translate-x-20"
        />
      </div>
    </section>
  );
};
