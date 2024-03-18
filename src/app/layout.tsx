import { DM_Sans, Montserrat, Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

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
const milston = localFont({
  src: '../fonts/milston/Milston.otf',
  variable: '--milston-font',
});
const denike = localFont({
  src: '../fonts/denike/Denike.otf',
  variable: '--denike-font',
});
const carola = localFont({
  src: '../fonts/carola/Carola.otf',
  variable: '--carola-font',
});

export const metadata: Metadata = {
  title: 'Softka Agency',
  description: 'Build your dream site with soft and eazy way',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${dm_sans.variable} ${milston.variable} ${denike.variable} ${carola.variable}`}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Nav /> */}
          {children}
          <footer></footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
