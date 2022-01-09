import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../helpers';

import styled from 'styled-components';

const AboutParagraph = styled.div`
  @media (min-width: 992px) {
    width: 65% !important;
  }
`;

function About() {
  const query = `
  {
    mastheadCollection{
      items {
        aboutParagraph
      }
    }
  }
  `;

  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setPage);
  }, []);

  if (!page) return 'Loading...';

  const { aboutParagraph } = page;

  return (
    <div className="container">
      <AboutParagraph>
        <ReactMarkdown children={aboutParagraph} />
      </AboutParagraph>
    </div>
  );
}

export default About;
