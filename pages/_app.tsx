import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/global.css';
import { Inter, Merriweather } from '@next/font/google';

const merriweather = Merriweather({
  subsets: ['latin-ext'],
  weight: ['400', '700', '900'],
  display: 'swap',
  variable: '--font-merriweather',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${merriweather.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />{' '}
    </main>
  );
}
