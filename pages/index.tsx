import Head from 'next/head';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import { getAllWork, getBlurb } from 'lib/api';
import { Markdown } from 'lib/markdown';
import Work from '@/components/work';
import Socials from '@/components/socials';
import Navbar from '@/components/navbar';

type AboutBlurb = {
  title: string;
  content: any;
};

type WorkData = {
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
};

export default function Home({
  aboutBlurb,
  workData,
}: {
  aboutBlurb: AboutBlurb;
  workData: WorkData[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="space-y-20">
        <div className="py-4">
          <Navbar />
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
