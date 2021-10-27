import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchContentfulData } from '../../helpers';

function Work() {
  const query = `
{
  workItemCollection {
    items {
      title
      subtitle
      link
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
        {items.map(({ title, subtitle, link }) => (
          <Link
            key={title}
            to={`/work/${encodeURI(link)}`}
          >
            <div>
              <h2>{title}</h2>
              <h3>{subtitle}</h3>
              <hr />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Work;
