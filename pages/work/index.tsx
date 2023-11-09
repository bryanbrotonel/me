import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import { getAllWork } from '../../lib/api';
import Date from '../../components/date';

export default function Work({
  allWorkData,
}: {
  allWorkData: {
    date: string;
    title: string;
    slug: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          .)
        </p>
      </section>
      <section>
        <h2>Work</h2>
        <ul>
          {allWorkData.map(({ slug, date, title }) => (
            <li key={slug}>
              <Link href={`/work/${slug}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
