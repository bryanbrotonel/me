import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../../helpers';

const fadeInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const HeaderWrapper = styled.div`
  animation-name: ${fadeInLeft};
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @media (min-width: 992px) {
    margin-right: 10rem;
    order: -1;
  }
`;

const MastheadTitle = styled.span`
  font-family: var(--font-primary);
  font-size: var(--text-xxxxl);
  font-weight: 700;
  color: var(--colour-primary);
`;

function MastheadHeader() {
  const query = `
  {
    mastheadCollection {
      items {
        title
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

  const { title, blurb } = page;

  return (
    <HeaderWrapper>
      <MastheadTitle>
        <ReactMarkdown children={title} components={{ p: 'span' }} />
      </MastheadTitle>
      <ReactMarkdown children={blurb} />
    </HeaderWrapper>
  );
}

export default MastheadHeader;
