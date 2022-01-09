import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import Work from '../Work';
import About from '../About';
import SectionTemplate from '../../components/SectionTemplate';
import { fetchContentfulData } from '../../helpers';

import styled from 'styled-components';

const MastheadWrapper = styled.div`
  display: grid;
  padding-bottom: 5rem;
  grid-gap: 20px;
  justify-content: space-evenly;
  text-align: left;

  div {
    justify-self: center;
    align-self: center;
  }

  @media (min-width: 992px) {
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, minmax(auto, 600px));
    padding: 2rem 0 10rem 0;
  }
`;

const MastheadImage = styled.img`
  justify-self: center;
  align-self: center;
  max-width: 75%;
  height: auto;
`;

const MastheadHeader = styled.div`
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
      <MastheadWrapper>
        <MastheadImage src={image.url} alt="Image" />
        <MastheadHeader className="container">
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
