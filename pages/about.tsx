import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getAllWork } from '../lib/api';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';

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
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, ex
          vel. Porro magnam dolores molestiae maxime libero veritatis facilis
          accusantium praesentium placeat deleniti laborum, iure sed odit
          delectus labore sunt.
        </p>
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
