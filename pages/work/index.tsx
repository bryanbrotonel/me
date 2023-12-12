import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import { getAllWork } from '../../lib/api';
import WorkItem from '@/components/workItem';

export default function Work({
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
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="flex flex-col items-center space-y-16">
          {allWorkData.map(
            ({
              slug,
              title,
              blurb,
              stack,
              websiteLink,
              sourceLink,
              coverImage: { url: coverImageUrl, title: coverImageTitle },
            }) => (
              <WorkItem
                key={slug}
                title={title}
                description={blurb}
                coverImageUrl={coverImageUrl}
                coverImageTitle={coverImageTitle}
                stack={stack}
                websiteLink={websiteLink}
                sourceLink={sourceLink}
              />
            ),
          )}
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
