interface ProjectDataType {
  tagsArray: string;
  imageSrc: string;
  imageAlt?: string;
  description: string;
  title: string;
  imageSrc2?: string;
  imageAlt2?: string;
  ourPart: Array<string>;
  href: string;
}

export const FreeDayData: ProjectDataType = {
  tagsArray:
    'React,React Query, React Hook Form, NextJS, Material UI, Typescript, RWD, Figma, Firebase',
  imageSrc2: '/img/project/freedayPhone.png',
  imageSrc: '/img/freeDayApp.jpg',
  description:
    'An AI app that provides automation for chats and emails, it also provides a dashboard for the company to manage the information and the AI.',
  title: 'FreeDay Project',
  href: '/projects/freeday',
  ourPart: [
    'Our involvement in this project extended to the development of the front-end component of the application. Leveraging design specifications provided by Figma, we meticulously translated the visual elements into a functional and aesthetically pleasing interface using React.',
    "Simultaneously, our team actively participated in the back-end development phase of the application. Through collaborative efforts with the client's team, we strived to devise optimal solutions aligned with the client's objectives. Our commitment to collaboration ensured the creation of a cohesive and effective end-to-end solution that met the client's requirements and expectations.",
  ],
};

export const CHBData: ProjectDataType = {
  tagsArray: 'React Native, React Hook Form,React Query, Typescript, Figma, Firebase',
  imageSrc2: '/img/project/chbPhone.png',
  imageSrc: '/img/chb-mockup2.png',
  description:
    'Scripture-based breathing exercises, visualizations, positive affirmations, and more',
  title: 'Christian Hypnobirthing Project',
  imageAlt: 'Christian hypnobirth Project Mockup',
  imageAlt2: 'Christian hypnobirth Project Mockup 2',
  href: '/projects/chb',
  ourPart: [
    'Our contribution to this project encompassed the development of a sophisticated login flow for the application. This involved the seamless transition of local storage data to Firebase Firestore, ensuring a robust and secure data storage solution. Additionally, we implemented a feature enabling users to switch between devices without any loss of settings.',
    'Our team diligently addressed various bugs within the application, enhancing its overall stability and performance. Furthermore, we executed an update, integrating the latest version of React Native and adhering to the recommended guidelines of the Google Store API, thereby ensuring optimal compatibility and compliance with industry standards.',
  ],
};

export const BarVoucherData: ProjectDataType = {
  tagsArray: 'React Native, React Hook Form,React Query, Stripe, Typescript, Figma, Firebase',
  imageSrc2: '/img/project/barVoucherPhone.png',
  imageSrc: '/img/barVoucherIphone.png',
  description:
    'Your gateway to exclusive discounts at premier bars and restaurants across your city. App provides a filter of bars, city, distance from a device, and a map view of the bars. Soon available on IOS and Android.',
  title: 'Bar Voucher Project',
  imageAlt: 'Barvoucher Project Mockup',
  imageAlt2: 'Barvoucher Project Mockup Second',
  href: '/projects/bar-voucher',
  ourPart: [
    'We initiated the development of the application from its conceptual stage, spearheading the transformation of the application design into a React Native framework seamlessly integrated with Firebase. Our comprehensive approach included facilitating user authentication through various platforms, such as Facebook and Google, while ensuring Apple users could conveniently log in through their Apple ID.',
    "In addition to robust authentication mechanisms, we successfully implemented the Stripe payment system, enhancing the application's functionality and enabling secure and efficient transaction processing. Our commitment to a holistic development process allowed for a comprehensive and feature-rich application tailored to meet the diverse needs of users across different platforms.",
  ],
};

export const SynlabData: ProjectDataType = {
  tagsArray:
    'Next.js, SiteCore, Typescript, Figma, Stripe, TailwindCSS, Next Auth, I18-Next, GraphQL, Rest Api, Storybook, Jest',
  imageSrc2: '/img/project/MacBookSynlab.png',
  imageSrc: '/img/project/MacBookSynlab.png',
  description:
    'Synlab provide a wide range of medical tests and services through thier website e-commerce. Also expertise of the doctors and the medical staff. Test results are available online and you can order a sample for testing at home.',
  title: 'Synlab E-commerce Project',
  imageAlt: 'Synlab Project Mockup',
  imageAlt2: 'Synlab Project Mockup Second',
  href: '/projects/synlab',
  ourPart: [
    'Our involvement in this project extended to the development of the front-end component of the application. Leveraging design specifications provided by Figma, we meticulously translated the visual elements into a functional and aesthetically pleasing interface using Next.js.',
  ],
};

export const ProjectData: ProjectDataType[] = [FreeDayData, CHBData, BarVoucherData, SynlabData];
