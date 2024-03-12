import type { Metadata } from 'next';
import { Roboto, Oswald } from 'next/font/google';
import './globals.css';
import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';


const roboto = Roboto({ subsets: ['cyrillic'], weight: ['400'], variable: '--font-roboto' });
const oswald = Oswald({ subsets: ['cyrillic'], weight: ['400'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'GamingZone',
  description: 'Продажа видеоигр',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable} w-full bg-zinc-950`}>
        <div className="__next">
          <Header/>
          <main className="main w-full" id="main">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
