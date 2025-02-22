import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from 'app/ui/navbar';
import Footer from 'app/ui/footer';

import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300','400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metaData: Metadata = {
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
  authors: [{ name: 'Bryan Brotonel', }],
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
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="container mx-auto flex flex-col h-full min-h-screen gap-10 p-8 lg:px-0 w-full max-w-3xl">
          <div className=''>
            <Navbar />
          </div>
          <div className="flex-1">{children}</div>
          <div className=''>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
