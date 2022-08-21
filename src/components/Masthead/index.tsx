import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { fetchContentfulData } from '../../helpers';
import FadeInTransition from '../FadeInTransition';
import EmptyPlaceholder from '../EmptyPlaceholder';
import { TypeMasthead } from '../../types';

const MastheadContainer = styled.div`
  min-height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5em;

  align-items: center;
  justify-content: center;
`;

const MastheadTitle = styled.div`
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: var(--text-xxxl);
  }
`;

const Logo = styled.img`
  width: 70px;
  height: auto;

  animation-name: rotateCenter;
  animation-duration: 20s;
  animation-delay: 1.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  @media (min-width: 768px) {
    width: 90px;
  }
`;

function Masthead() {
  const query = `
  {
    mastheadCollection {
      items {
        title
        logo{
          title
          url
        }
      }
    }
  }
  `;

  const [masthead, setMasthead] = useState(null);

  useEffect(() => {
    (async () => {
      const data = (await fetchContentfulData(
        query,
        'mastheadCollection'
      )) as TypeMasthead;
      setMasthead(data);
    })();
  }, []);

  if (!masthead) return <EmptyPlaceholder />;

  const { title, logo } = masthead;

  return (
    <MastheadContainer className="container">
      <HeaderWrapper>
        <FadeInTransition>
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
        </FadeInTransition>
        <FadeInTransition>
          <Logo src={logo.url} alt={logo.title} />
        </FadeInTransition>
      </HeaderWrapper>
    </MastheadContainer>
  );
}

export default Masthead;
