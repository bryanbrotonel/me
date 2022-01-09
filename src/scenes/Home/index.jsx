import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import Work from '../Work';
import About from '../About';
import SectionTemplate from '../../components/SectionTemplate';
import { fetchContentfulData } from '../../helpers';

import styled from 'styled-components';

const MastheadWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const MastheadImage = styled.img`
  max-width: 300px;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    max-width: 450px;
    margin: 0;
  }
`;

const MastheadHeader = styled.div`
  flex-basis: 50%;
  @media (min-width: 992px) {
    order: -1;
  }
`;

const MastheadTitle = styled.span`
  font-family: var(--font-primary);
  font-size: var(--text-xxxxl);
  font-weight: 700;
  color: var(--colour-primary);
`;

function Home() {
  const query = `
  {
    mastheadCollection{
      items {
        title
        image{
          url
        }
        blurb
      }
    }
  }
  `;

  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setPage);
  }, []);

  if (!page) return 'Loading...';

  const { title, image, blurb } = page;

  return (
    <React.Fragment>
      <MastheadWrapper className="container">
        <MastheadImage src={image.url} alt="Image" />
        <MastheadHeader>
          <MastheadTitle>{title}</MastheadTitle>
          <ReactMarkdown children={blurb} />
        </MastheadHeader>
      </MastheadWrapper>
      <SectionTemplate anchor="about" title="About">
        <About />
      </SectionTemplate>
      <SectionTemplate anchor="work" title="Recent Work">
        <Work />
      </SectionTemplate>
    </React.Fragment>
  );
}

export default Home;
