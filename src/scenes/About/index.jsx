import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../helpers';

import styled from 'styled-components';

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutParagraph = styled.div`
  text-align: center;

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    max-width: 60%;
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

  if (!page) return <div></div>;

  const { aboutParagraph } = page;

  return (
    <AboutWrapper className="container">
      <AboutParagraph>
        <ReactMarkdown children={aboutParagraph} />
      </AboutParagraph>
    </AboutWrapper>
  );
}

export default About;
