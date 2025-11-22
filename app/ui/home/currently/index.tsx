import React from 'react';
import CurrentlyItem from './currentlyItem';
import { loadCurrentlyData } from 'app/lib/homeData';

export default async function Currently() {
  let currentlyData = await loadCurrentlyData();

  return (
    <div className="flex flex-col gap-5">
      {currentlyData.map(({ header, title, subtitle, image, source }) => (
        <div key={header}>
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
