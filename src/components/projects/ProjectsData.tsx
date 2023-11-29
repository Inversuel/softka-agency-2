import { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';
import LinkButton from '../LinkButton';
import gsap from 'gsap';

export const FreeDayProject = (): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) {
      return;
    } else {
      VanillaTilt.init(imageRef.current, {
        max: 15,
        perspective: 1400,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        speed: 1200,
        glare: true,
        'max-glare': 0.2,
        scale: 1.04,
      });
    }
  }, []);

  return (
    <section className="h-screen w-screen p-12 flex flex-shrink-0 itemScroll">
      <div className="flex flex-col p-11 gap-10 justify-center items-start">
        <div>
          <h2 className="font-montserrat text-4xl font-bold ">FreeDay Project</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <p className="text-lg max-w-2xl">
                An AI app that provides automation for chats and emails, it also provides a
                <span className="text-brand"> dashboard</span> for the company to manage the
                information and the <span className="text-brand">AI</span>.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <p className="text-lg">
                React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma,
                Firebase
              </p>
            </div>
          </div>
        </div>
        <LinkButton href="/projects/freeday" text="Learn More" />
      </div>
      <div className="w-full h-full grid place-items-center">
        <Image
          ref={imageRef}
          width={1000}
          height={875}
          src="/img/freeDayApp.jpeg"
          alt="FreeDay Project Mockup"
          className="rounded-3xl transform-3d"
        />
      </div>
    </section>
  );
};

export const BarVouchersProject = (): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null);
  const imageRef2 = useRef<HTMLImageElement>(null);
  return (
    <section className="h-screen w-screen p-12 grid grid-cols-5 flex-shrink-0 itemScroll">
      <div className="w-full h-full col-start-1 col-end-3 row-start-1 grid place-items-center">
        <Image
          ref={imageRef2}
          width={1000}
          height={875}
          src="/img/barVoucherIphone.png"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d hover:z-10"
        />
      </div>
      <div className="col-start-2 col-end-5 row-start-1 flex flex-col p-11 gap-10 justify-center items-center backdrop-blur-lg">
        <div>
          <h2 className="font-montserrat text-4xl font-bold ">Bar Voucher Project</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <p className="text-lg flex flex-col max-w-xl">
                <span className="text-brand">BarVoucher</span> Your gateway to exclusive discounts
                at premier bars and restaurants across your city. App provides a filter of bars,
                city, distance from a device, and a map view of the bars.
                <span className="font-semibold">Soon available on IOS and Android</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <p className="text-lg">
                React Native, React Hook Form,React Query, Stripe, Typescript, Figma, Firebase,
              </p>
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
          className="rounded-3xl transform-3d z-10"
        />
      </div>
    </section>
  );
};

interface CHBProjectProps {
  triggerTimeline?: gsap.core.Tween;
}

export const CHBProject = ({ triggerTimeline }: CHBProjectProps): JSX.Element => {
  const iphoneRef = useRef<HTMLImageElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to(iphoneRef.current, {
        y: -1430,
        x: 380,
        scale: 0.27,
        duration: 1,
        delay: 0.3,
        opacity: 1,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: iphoneRef.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
          markers: true,
        },
        id: '1',
      });
      gsap.to(textContainer.current, {
        duration: 1,
        ease: 'power3.inOut',
        delay: 0.3,
        opacity: 1,
        alignItems: 'flex-start',
        scrollTrigger: {
          trigger: textContainer.current,
          containerAnimation: triggerTimeline,
          start: 'start center',
          toggleActions: 'play none none reverse',
          markers: true,
        },
        id: '2',
      });
    });
    return () => context.revert();
  }, [triggerTimeline]);
  return (
    <section className="h-screen w-screen p-12 flex-shrink-0 itemScroll">
      <div
        ref={textContainer}
        className="flex flex-col p-11 gap-10 justify-center items-center opacity-0"
      >
        <div>
          <h2 className="font-montserrat text-4xl font-bold ">Christian Hypnobirthing Project</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Description</p>
              <p className="text-lg flex flex-col max-w-xl">
                Scripture-based breathing exercises, visualizations, positive affirmations, and more
              </p>
            </div>
            <div className="flex flex-col gap-3 max-w-lg">
              <p className="font-semibold text-7xl opacity-10 -mb-10">Technologies</p>
              <p className="text-lg">
                React Native, React Hook Form,React Query, Typescript, Figma, Firebase,
              </p>
            </div>
          </div>
        </div>
        <LinkButton href="projects/barvoucher" text="Learn More" />
      </div>
      <div className="w-full h-full relative grid place-items-center">
        <Image
          ref={iphoneRef}
          width={1339}
          height={2716}
          src="/img/chb-mockup.png"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d z-10 opacity-0"
        />
      </div>
    </section>
  );
};

export const SynLabProject = (): JSX.Element => {
  return (
    // <ProjectComponent
    //   title={'SynLab Project'}
    //   description={
    //     'Project descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion'
    //   }
    //   image={'/img/Macbook2.png'}
    //   link={''}
    // />
    <></>
  );
};

export const MayonesProject = (): JSX.Element => {
  return (
    // <ProjectComponent
    //   title={'Mayones Project'}
    //   description={
    //     'Project descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion descritpion'
    //   }
    //   image={'/img/Macbook2.png'}
    //   link={''}
    // />
    <></>
  );
};
