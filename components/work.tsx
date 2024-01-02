import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import WorkItem from '@/components/workItem';
import { getAllWork } from 'lib/api';

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
    <div className="flex flex-col md:flex-row flex-wrap gap-y-10 md:gap-x-16">
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
