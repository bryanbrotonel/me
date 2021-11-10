import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../helpers';

const WorkButton = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--colour-primary);
  border-radius: 6px;
  align-self: center;

  background-color: var(--colour-primary);
  font-size: var(--text-md);
  color: white;
  text-decoration: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

function Resume() {
  const query = `
  {
    curriculumVitaeCollection(where: { title: "Resume" }) {
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
      <div className="contentWrapper">
        <h1>{title}</h1>
        <ReactMarkdown children={content} />
        <div style={{ textAlign: 'center' }}>
          <WorkButton
            as="a"
            href="https://drive.google.com/file/d/12y3SCi4ydITuYWGpHkddnnpOo-Owk5m6/view?usp=sharing"
            title="Bryan Brotonel | Resume"
            target="_blank"
          >
            Download my Resume
          </WorkButton>
        </div>
      </div>
    </div>
  );
}

export default Resume;
