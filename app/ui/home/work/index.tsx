import React from 'react';
import WorkItem from './workItem';
import { loadWorkData } from 'app/lib/homeData';

export default async function Work() {
  const workData = await loadWorkData();

  return (
    <div className='space-y-12'>
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
        )
      )}
    </div>
  );
}
