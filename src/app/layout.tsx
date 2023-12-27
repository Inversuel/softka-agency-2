import { DM_Sans, Montserrat, Poppins } from 'next/font/google';
import './globals.css';
// import { ReactLenis } from '@studio-freight/react-lenis';
import { Metadata } from 'next';
import Nav from '@/components/navigation/Nav';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--dm-snans-font',
});
const poppins = Poppins({
  weight: ['400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--poppins-font',
});
const montserrat = Montserrat({
  weight: ['400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--montserrat-font',
});

export const metadata: Metadata = {
  title: 'Softka Agency',
  description: 'Build your dream site with soft and eazy way',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${dm_sans.variable}`}
      suppressHydrationWarning={true}
    >
      <body className={`overflow-x-hidden relative`}>
        <Nav />
        {/* <ReactLenis root> */}
        {children}
        {/* </ReactLenis> */}
        <footer></footer>
      </body>
    </html>
  );
}
