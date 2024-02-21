import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
