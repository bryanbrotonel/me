import React from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllWork, getWorkAndMoreWork } from '../../lib/api';

export default function Work({
  work,
  moreWork,
}: {
  work: {
    title: string;
    date: string;
    blurb: string;
    stack: [string];
  };
  moreWork: {
    title: string;
    slug: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{work.title}</title>
      </Head>
      <article>
        <h1>{work.title}</h1>
        <div>
          <Date dateString={work.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: work.blurb }} />
        <h2>Stack</h2>
        {work.stack.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
      <div>
        <h3>More Work</h3>
        {
          <ul>
            {moreWork.map(({ slug, title }) => (
              <div key={slug}>
                <a href={`/work/${slug}`}>{title}</a>
                <br />
              </div>
            ))}
          </ul>
        }
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }

  const work = await getAllWork(false);

  const paths = work.map((work) => ({
    params: {
      id: work.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, draftMode }) => {
  const { work, moreWork } = await getWorkAndMoreWork(
    params?.id as string,
    draftMode,
  );
  return {
    props: {
      work,
      moreWork,
    },
  };
};
