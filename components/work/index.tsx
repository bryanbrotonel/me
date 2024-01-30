import React from 'react';
import Link from 'next/link';
import WorkItem from './workItem';
import { workDataProps } from 'lib/types';

export default function Work({ workData }: { workData: workDataProps[] }) {
  return (
    <div>
      <div className="flex flex-col space-y-16">
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
      <div className="flex justify-center mt-8 hover:underline text-sm">
        <Link
          href={'https://github.com/bryanbrotonel'}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Projects
        </Link>
        <span className="ml-1">&#8594;</span>
      </div>
    </div>
  );
}
