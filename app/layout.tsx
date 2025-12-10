import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from 'app/ui/navbar';

import '@/styles/global.css';
import Footer from './ui/footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Bryan Brotonel',
    default: 'Bryan Brotonel',
  },
  description: 'Personal website for Bryan Brotonel.',
  generator: 'Next.js',
  applicationName: 'bryanbrotonel/me',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'Typescript',
    'Bryan',
    'Brotonel',
    'bryanbrotonel',
  ],
  authors: [{ name: 'Bryan Brotonel' }],
  creator: 'Bryan Brotonel',
  publisher: 'Bryan Brotonel',
  themeColor: '#F8FAFC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans`}>
        <div className='h-full w-full max-w-2xl container flex flex-col mx-auto px-10 py-10 lg:px-0 gap-10'>
          <Navbar />
          <div className='border-0'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
