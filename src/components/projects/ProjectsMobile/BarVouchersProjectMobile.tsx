import Image from 'next/image';
import Title from '@/components/ui/title';
import Description from '@/components/ui/description';
import Tags from '@/components/ui/tags';
import Link from 'next/link';

export const BarVouchersProjectMobile = (): JSX.Element => {
  const arrayTags =
    'React Native, React Hook Form,React Query, Stripe, Typescript, Figma, Firebase'.split(',');

  return (
    <section className="w-screen my-12 px-4 md:px-12 flex flex-col ">
      <div className="w-full h-full col-start-1 col-end-3 row-start-1 grid place-items-center">
        <Image
          width={1000}
          height={875}
          src="/img/barVoucherIphone.webp"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d hover:z-10 active:z-10 translate-x-20"
        />
      </div>
      <div className="flex flex-col p-4 gap-10 justify-center items-start backdrop-blur-lg">
        <div>
          <Title className="text-4xl translate-x-20">Bar Voucher Project</Title>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col translate-x-20">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Description</span>
              <Description className="text-lg max-w-xs">
                <span className="text-brand">BarVoucher</span> is Your gateway to exclusive
                discounts at premier bars and restaurants across your city. App provides a filter of
                bars, city, distance from a device, and a map view of the bars.
              </Description>
              <span className="text-lg font-semibold">Soon available on IOS and Android</span>
            </div>
            <div className="flex flex-col gap-3 max-w-xs translate-x-20">
              <span className="font-semibold text-7xl opacity-10 -mb-10">Technologies</span>
              <Tags array={arrayTags} containerClassName="z-10" />
            </div>
          </div>
        </div>
        <Link
          href="projects/barvoucher"
          aria-label="Learn More About BarVoucher"
        >Learn more</Link>
      </div>
      <div className="relative w-full h-[30rem] md:h-[40rem] grid place-items-center -mt-10">
        <Image
          fill
          src="/img/barVoucherIphone2.webp"
          alt="Barvoucher Project Mockup"
          className="rounded-3xl transform-3d z-10 translate-x-20"
        />
      </div>
    </section>
  );
};
