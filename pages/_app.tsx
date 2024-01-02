import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/global.css';
import { Inter, Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${playfair.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
