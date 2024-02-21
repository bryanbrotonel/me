import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from 'app/ui/navbar';
import Footer from 'app/ui/footer';

import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

export const metaData: Metadata = {
  title: 'bryan brotonel',
  description: 'Personal website for Bryan Brotonel.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <div className="container mx-auto flex flex-col gap-7 p-8 lg:px-0 w-full max-w-3xl">
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
