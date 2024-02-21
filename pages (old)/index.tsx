import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../app/components/layout';
import Work from 'app/components/work';
import { GetStaticProps } from 'next';
import { blurbProps, currentlyDataProps, workDataProps } from 'lib/types';
import { Markdown } from 'lib/markdown';
import { loadHomeData } from 'lib/api/home';
import Currently from 'app/components/currently';

export default function Home({
  aboutBlurb,
  workData,
  currentlyData,
}: {
  aboutBlurb: blurbProps;
  workData: workDataProps[];
  currentlyData: currentlyDataProps[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col space-y-14">
        <div>
          <h1 className="font-light text-xs text-white/50 mb-2">About</h1>
          <Markdown content={aboutBlurb.content} />
        </div>
        <div>
          <Currently currentlyData={currentlyData} />
        </div>
        <div>
          <h1 className="font-light text-xs text-white/50 mb-4">Work</h1>
          <Work workData={workData} />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageData = await loadHomeData(context);

  return {
    props: pageData,
  };
};

// Need to use SWR
