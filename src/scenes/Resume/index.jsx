import React, { useState, useEffect } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulData } from '../../helpers';

function Resume() {
  const query = `
  {
    curriculumVitaeCollection {
      items {
        title
        content {
          json
        }
      }
    }
  }
  `;

  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'curriculumVitaeCollection', setPageContent);
  }, []);

  if (!pageContent) return 'Loading...';

  const { title, content } = pageContent;

  return (
    <div className="pageWrapper">
      <div className="contentWrapper">
        <h1>Resume</h1>
        {documentToReactComponents(content['json'])}
      </div>
    </div>
  );
}

export default Resume;
