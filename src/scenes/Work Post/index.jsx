import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchContentfulData } from '../../helpers';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function WorkPost() {
  let { workPost } = useParams();

  const query = `
    {
    workItemCollection(where: {link_contains: "${decodeURI(workPost)}"}) {
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

  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'workItemCollection', setPageContent);
  }, []);

  if (!pageContent) return 'Loading...';

  const { title, subtitle, content } = pageContent;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {documentToReactComponents(content['json'])}
    </div>
  );
}

export default WorkPost;
