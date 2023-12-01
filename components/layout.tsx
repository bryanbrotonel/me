import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';

export const siteTitle = 'Bryan Brotonel';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Bryan Brotonel" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex flex-col h-screen">
        <div className="flex flex-grow flex-col md:flex-row md:justify-center md:gap-16 md:pt-56">
          <div className="mb-12 md:mb-auto md:sticky md:top-56">
            <Navbar />
          </div>
          <div className="flex-grow md:w-1/2 md:max-w-2xl">
            <main className="container mx-auto px-4 md:px-0">{children}</main>
          </div>
        </div>
        <footer className="mt-auto">
          <div className="mt-12 text-center">
            <span>Bryan Brotonel</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  home: false,
};
