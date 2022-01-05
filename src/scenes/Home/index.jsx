import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

import Work from '../Work';
import About from '../About';
import { fetchContentfulData } from '../../helpers';

import styled from 'styled-components';

const MastheadWrapper = styled.div`
  display: grid;
  padding: 100px 0;
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
  }
`;

const MastheadImageWrapper = styled.div`
  text-align: center;
`;

const MastheadImage = styled.img`
  max-width: 75%;
  height: auto;

  @media (min-width: 992px) {
    min-width: 100%;
    max-width: 450px;
  }
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
        <MastheadImageWrapper>
          <MastheadImage src={image.url} alt="Image" />
        </MastheadImageWrapper>
        <MastheadHeader className="container">
          <MastheadTitle>{title}</MastheadTitle>
          <ReactMarkdown children={blurb} />
        </MastheadHeader>
      </MastheadWrapper>
      <div className='sectionWrapper'>
        <About />
      </div>
      <div className='sectionWrapper'>
        <Work />
      </div>
    </React.Fragment>
  );
}

export default Home;
