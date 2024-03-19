import React from 'react';
import CurrentlyItem from './currentlyItem';
import { loadCurrentlyData } from 'app/lib/homeData';

export default async function Currently() {
  let currentlyData = await loadCurrentlyData();

  return (
    <div className="flex flex-col md:flex-row gap-7">
      {currentlyData.map(({ header, title, subtitle, image, source }) => (
        <div className="md:w-1/3" key={header}>
          <CurrentlyItem
            item={{
              header,
              title,
              subtitle,
              image,
              source,
            }}
          />
        </div>
      ))}
    </div>
  );
}
