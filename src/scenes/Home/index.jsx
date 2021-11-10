import React, { useState, useEffect } from 'react';
import { fetchContentfulData } from '../../helpers';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';

const MastheadWrapper = styled.div`
  display: grid;
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

  const { title, image, blurb } = page;

  return (
    <div>
      <MastheadWrapper>
        <MastheadImageWrapper>
          <MastheadImage src={image.url} alt="Image" />
        </MastheadImageWrapper>
        <MastheadHeader>
          <MastheadTitle>{title}</MastheadTitle>
          <p>{blurb}</p>
        </MastheadHeader>
      </MastheadWrapper>
    </div>
  );
}

export default Home;
