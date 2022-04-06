import React, { useState, useEffect } from 'react';

import { fetchContentfulData } from '../../helpers';

import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Header from 'Components/Header';
import ProfileImage from './ProfileImage';

const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  padding: 5rem 0;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const AboutParagraph = styled.div`
  @media (min-width: 768px) {
    max-width: 650px;
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
    <AboutWrapper id="about" className="container">
      <AboutParagraph>
        <Header title={'Who is Bryan?'} subtitle={'about'} />
        <ReactMarkdown children={aboutParagraph} />
      </AboutParagraph>
      <ProfileImage />
    </AboutWrapper>
  );
}

export default About;
