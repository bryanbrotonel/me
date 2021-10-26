import React, { useState, useEffect } from 'react';
import { fetchContentfulData } from '../../helpers';

import './styles.scss';

function Home() {
  const query = `
  {
    mastheadCollection{
      items {
        title
        image{
          url
        }
        blurb
      }
    }
  }
  `;

  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setPage);
  }, []);

  if (!page) return 'Loading...';

  const { title, image, blurb } = page;

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={image.url} alt="Image" />
        <p>{blurb}</p>
      </div>
    </div>
  );
}

export default Home;
