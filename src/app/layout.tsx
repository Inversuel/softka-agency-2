import { DM_Sans, Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';
import KMLink from '@/components/KMLink';

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

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${dm_sans.variable}`}
      suppressHydrationWarning={true}
    >
      <body className=" overflow-x-hidden">
        <header className="px-24 py-12 flex justify-between align-middle sticky z-[1]">
          <Logo className="self-start cursor-pointer" />
          <nav className="flex gap-7 align-middle items-center">
            <KMLink href="/">Home</KMLink>
            <KMLink href="/projects">Projects</KMLink>
            <KMLink href="/services">Service</KMLink>
            <KMLink href="/contact">Contact</KMLink>
            <button className="py-3 px-12 bg-brand text-lightest rounded-3xl ml-10 hover:scale-105 hover:shadow-xl transition duration-500">
              Get Started
            </button>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
