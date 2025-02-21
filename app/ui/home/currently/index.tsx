import React from 'react';
import CurrentlyItem from './currentlyItem';
import { loadCurrentlyData } from 'app/lib/homeData';

export default async function Currently() {
  let currentlyData = await loadCurrentlyData();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
