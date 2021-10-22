import React, { useState, useEffect } from 'react';

import './styles.scss';

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

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch('https://graphql.contentful.com/content/v1/spaces/yg6bvazmunnt/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Auth request
          Authorization:
            'Bearer a0257b82968ffe4ec3d59ee2087eea1f82eabd5b0a2c50e9737aeadceb95d24d',
        },
        // Send GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // render entire component with new data
        setPage(data.mastheadCollection.items[0]);
      });
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

export default App;
