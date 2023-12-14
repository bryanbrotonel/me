import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Socials from '@/components/socials';
import { GetStaticProps } from 'next';
import { getBlurb } from 'lib/api';
import { Markdown } from 'lib/markdown';

export default function About({
  aboutContent,
}: {
  aboutContent: {
    title: string;
    content: {
      json: any;
      links: {
        assets: {
          block: {
            sys: {
              id: string;
            };
            url: string;
            description: string;
          }[];
        };
      };
    };
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className="space-y-3">
          <Markdown content={aboutContent.content} />
        </div>
        <div className="mt-6">
          <Socials />
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutContent = await getBlurb('About');
  return {
    props: {
      aboutContent,
    },
  };
};
