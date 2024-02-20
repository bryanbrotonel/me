import React from 'react';
import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

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
      <div className="container mx-auto flex flex-col gap-7 p-8 lg:px-0 w-full max-w-3xl">
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  home: false,
};
