import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../../helpers';

const fadeInUp = keyframes`
  0% {
    -webkit-transform: translateY(20px);
            transform: translateY(20px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const rotateCenter = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MastheadTitle = styled.span`
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: 700;

  margin-bottom: 2em;

  animation-name: ${fadeInUp};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;

  @media (min-width: 768px) {
    margin: 1em 0;
    font-size: var(--text-xxxl);
  }
`;

const Logo = styled.img`
  width: 70px;
  height: auto;

  animation-name: ${rotateCenter};
  animation-duration: 20s;
  animation-delay: 1.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  @media (min-width: 768px) {
    width: 90px;
  }
`;

function MastheadHeader() {
  const query = `
  {
    mastheadCollection {
      items {
        title
        logo{
          url
        }
      }
    }
  }
  `;

  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setPage);
  }, []);

  if (!page) return <div></div>;

  const { title, logo } = page;

  return (
    <HeaderWrapper>
      <MastheadTitle>
        <ReactMarkdown
          children={title}
          components={{
            // Map `p` (`paragraph`) to use `span`s.
            p: 'span',
            // Rewrite `strong`s (`__bold font__`) to `span` with primary font color.
            strong: ({ node, ...props }) => (
              <span style={{ color: 'var(--colour-primary)' }} {...props} />
            ),
          }}
        />
      </MastheadTitle>
      <div>
        <Logo src={logo.url} alt="Logo" />
      </div>
    </HeaderWrapper>
  );
}

export default MastheadHeader;
