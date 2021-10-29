import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fetchContentfulData } from '../../helpers';

function CurriculumVitae() {
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
    <div>
      <h1>{title}</h1>
      {documentToReactComponents(content['json'])}
    </div>
  );
}

export default CurriculumVitae;
