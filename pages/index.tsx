import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getAllWork } from '../lib/api';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

export default function Home({
  allWorkData,
}: {
  allWorkData: {
    date: string;
    title: string;
    slug: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Work</h2>
        <ul className={utilStyles.list}>
          {allWorkData.map(({ slug, date, title }) => (
            <li className={utilStyles.listItem} key={slug}>
              <Link href={`/work/${slug}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
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
  // const allWorkData = getSortedWorkData()
  const allWorkData = await getAllWork(context.draftMode);
  return {
    props: {
      allWorkData,
    },
  };
};
