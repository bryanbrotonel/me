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
      <div className="min-h-screen flex flex-col xl:flex-row items-center xl:justify-center xl:space-x-24">
        <div className="xl:md-0 my-5">
          <Navbar />
        </div>
        <main className="w-full xl:w-2/4">
          <div className="md:container mx-auto px-4">{children}</div>
        </main>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  home: false,
};
