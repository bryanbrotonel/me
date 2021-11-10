import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../helpers';

function Education() {
  const query = `
  {
    curriculumVitaeCollection(where: { title: "Education" }) {
      items {
        title
        content
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
      <div className="contentWrapper container">
        <h1>{title}</h1>
        <ReactMarkdown children={content} />
      </div>
    </div>
  );
}

export default Education;
