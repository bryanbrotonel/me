import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulData } from '../../helpers';

import Error from '../Error';

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

  if (!pageContent) return <div></div>;

  const { title, subtitle, content } = pageContent;

  return pageContent.length == 0 ? (
    <Error />
  ) : (
    <div className="pageWrapper">
      <div className="contentWrapper">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        {documentToReactComponents(content['json'])}
      </div>
    </div>
  );
}

export default WorkPost;
