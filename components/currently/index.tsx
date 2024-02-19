import { currentlyDataProps } from 'lib/types';
import React from 'react';
import CurrentlyItem from './currentlyItem';

export default function Currently({
  currentlyData,
}: {
  currentlyData: currentlyDataProps[];
}) {
  return (
    <div className="flex flex-col md:flex-row gap-7">
      {currentlyData.map(
        ({ header, content: { title, author, image, source } }) => (
          <div className="basis-1/3" key={header}>
            <CurrentlyItem
              item={{
                header: header,
                content: {
                  title: title,
                  author: author,
                  image: image,
                  source: source,
                },
              }}
            />
          </div>
        ),
      )}
    </div>
  );
}
