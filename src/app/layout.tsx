import { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';

import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['italic', 'normal'],
	variable: '--font-poppins',
});

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['italic', 'normal'],
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'Next.js Ecommerce Gaming Store',
	description: 'Ecommerce shop that sells online games - Built with Next.js 14, React & Sanity CMS',
};

export default function RootLayout({
  children,
}: {
	children: React.ReactNode;
}) {
  return (
	<html lang='en' className={`${poppins.variable} ${montserrat.variable}`}>
        <body>
            <Header />
            <main className='bg-primary-gradient min-h-screen'>{children}</main>
            <Footer />
      </body>
    </html>
  );
}
