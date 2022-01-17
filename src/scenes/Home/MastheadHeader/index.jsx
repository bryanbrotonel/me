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
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    order: -1;
  }
`;

const MastheadTitle = styled.span`
  font-family: var(--font-primary);
  font-size: var(--text-xxxxl);
  font-weight: 700;
  color: var(--colour-primary);

  animation-name: ${fadeInLeft};
  animation-duration: 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

const MastheadBlurb = styled.span`
  font-family: var(--font-secondary);
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--colour-darkGrey);
  margin-top: 1rem;

  animation-name: ${fadeInLeft};
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
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

  if (!page) return <div></div>;

  const { title, blurb } = page;

  return (
    <HeaderWrapper>
      <MastheadTitle>
        <ReactMarkdown children={title} components={{ p: 'span' }} />
      </MastheadTitle>
      <MastheadBlurb>
        <ReactMarkdown children={blurb} components={{ p: 'span' }} />
      </MastheadBlurb>
    </HeaderWrapper>
  );
}

export default MastheadHeader;
