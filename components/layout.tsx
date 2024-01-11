import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';

export const siteTitle = 'bryan brotonel';

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
      <div className="flex flex-col h-screen md:px-4 xl:px-0">
        <div className="flex flex-grow flex-col gap-3 pb-16 md:flex-row md:justify-center md:gap-8 md:pt-32">
          <div className="md:mb-auto md:sticky top-0 md:top-32 pt-2">
            <Navbar />
          </div>
          <div className="w-full h-[0.5px] md:w-[0.5px] md:h-full bg-black/20" />
          <div className="flex-grow md:w-1/3 md:max-w-xl">
            <main className="container mx-auto px-4 md:px-0">{children}</main>
          </div>
        </div>
        {/* TODO: Add some sort of footer */}
      </div>
    </div>
  );
}

Layout.defaultProps = {
  home: false,
};
