import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Work from '@/components/work';
import { GetStaticProps } from 'next';
import { getAllWork } from 'lib/api';

export default function Home({
  allWorkData,
}: {
  allWorkData: {
    title: string;
    blurb: string;
    date: string;
    slug: string;
    stack: string[];
    websiteLink: string;
    sourceLink: string;
    coverImage: {
      title: string;
      url: string;
    };
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <Work allWorkData={allWorkData} />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const allWorkData = await getAllWork(context.draftMode);
  return {
    props: {
      allWorkData,
    },
  };
};
