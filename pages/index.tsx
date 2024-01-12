import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Work from '@/components/work';
import { GetStaticProps } from 'next';
import { getAllWork, getBlurb } from 'lib/api';
import { blurbProps, workDataProps } from 'lib/types';
import { Markdown } from 'lib/markdown';

export default function Home({
  aboutBlurb,
  workData,
}: {
  aboutBlurb: blurbProps;
  workData: workDataProps[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col space-y-14">
        <div>
          <h1 className="text-xs text-black/50 mb-1"># About</h1>
          <Markdown content={aboutBlurb.content} />
        </div>
        <div>
          <h1 className="text-xs text-black/50 mb-1"># Work</h1>
          <Work workData={workData} />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const aboutBlurb = await getBlurb('About');
  const allWorkData = await getAllWork(context.draftMode);
  return {
    props: {
      aboutBlurb: aboutBlurb,
      workData: allWorkData,
    },
  };
};
