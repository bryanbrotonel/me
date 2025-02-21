import React from 'react';
import Link from 'next/link';
import WorkItem from './workItem';
import { loadWorkData } from 'app/lib/homeData';

export default async function Work() {
  const workData = await loadWorkData();

  return (
    <div>
      <div className="grid grid-flow-row md:grid-cols-2 gap-5">
        {workData.map(
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
      <div className="flex justify-center mt-8">
        <div>
          <Link
            href={'https://github.com/bryanbrotonel'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            More Projects
            <span className="ml-1">&#8594;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
