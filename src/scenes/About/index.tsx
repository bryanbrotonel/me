import React, { useState, useEffect } from 'react';

import { fetchContentfulData } from '../../helpers';

import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

import Header from '../../components/Header';
import ProfileImage from './ProfileImage';
import FadeInTransition from '../../components/FadeInTransition';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';
import { TypeMasthead } from '../../types';

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const AboutParagraph = styled.div`
  @media (min-width: 768px) {
    max-width: 650px;
  }
`;

const ProfileImageWrapper = styled.div`
  padding: 2rem 0;

  @media (min-width: 768px) {
    padding: 0;
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
    (async () => {
      const data = (await fetchContentfulData(
        query,
        'mastheadCollection'
      )) as TypeMasthead;
      setPage(data);
    })();
  }, []);

  if (!page) return <EmptyPlaceholder />;

  const { aboutParagraph } = page;

  return (
    <AboutContainer id="about" className="container">
      <FadeInTransition>
        <AboutParagraph>
          <Header title={'Who is Bryan?'} subtitle={'about'} />
          <ReactMarkdown children={aboutParagraph} />
        </AboutParagraph>
      </FadeInTransition>
      <ProfileImageWrapper>
        <FadeInTransition>
          <ProfileImage />
        </FadeInTransition>
      </ProfileImageWrapper>
    </AboutContainer>
  );
}

export default About;
