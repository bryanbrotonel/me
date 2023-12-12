import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

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
      <div className="flex flex-col h-screen md:px-4 xl:px-0">
        <div className="flex flex-grow flex-col md:flex-row md:justify-center md:gap-20 md:pt-48">
          <div className="mb-6 md:mb-auto sticky top-0 md:top-56">
            <Navbar />
          </div>
          <div className="flex-grow md:w-1/2 md:max-w-3xl">
            <main className="container mx-auto px-4 md:px-0">{children}</main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  home: false,
};
