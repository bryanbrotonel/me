import React, { useState, useEffect } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulData } from '../../helpers';

function Work() {
  const query = `
{
  workItemCollection {
    items {
      title
      subtitle
      content {
        json
      }
    }
  }
}
  `;

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'workItemCollection', setItems);
  }, []);

  if (!items) return 'Loading...';

  return (
    <div>
      <h1>Work</h1>
      <div>
        {items.map(({ title, subtitle }) => (
          <div key={title}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
