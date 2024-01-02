import Head from 'next/head';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import About from './about';
import { getAllWork, getBlurb } from 'lib/api';
import { Markdown } from 'lib/markdown';
import Footer from '../components/footer';
import Work from '@/components/work';
import Socials from '@/components/socials';

export default function Home({
  aboutBlurb,
  workData,
}: {
  aboutBlurb: {
    title: string;
    content: any;
  };
  workData: {
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
      <div className="space-y-20">
        <div className="pt-4">
          <h1 className="text-2xl font-bold pb-2">bryan brotonel</h1>
          <h2 className="font-sans">Web Developer</h2>
          <div className="w-full max-w-3xl pt-4">
            <Markdown content={aboutBlurb.content} />
          </div>
        </div>
        <div className="w-full max-w-7xl">
          <Work allWorkData={workData} />
        </div>
        <div className="pb-10">
          <Socials />
        </div>
      </div>
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
