import React from 'react';
import styled from 'styled-components';

import { NavHashLink } from 'react-router-hash-link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  padding: 2rem 0;

  @media (min-width: 600px) {
    flex-direction: row;

    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-grow: 0.3;
  gap: 2rem;
  flex-flow: end;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
    gap: 4rem;
  }
`;

const Link = styled(NavHashLink)`
  text-decoration: none;
  align-self: center;

  font-family: var(--font-primary);
  font-size: var(--text-md);
  color: var(--colour-black);

  &.homeLink {
    font-weight: bold;
    font-size: var(--text-lg);
    color: var(--colour-primary);
  }
`;

function Navbar() {
  return (
    <Wrapper className="container-sm">
      <Link to="/" className="homeLink">
        BryanBrotonel
      </Link>
      <PagesWrapper>
        <Link smooth to="/#about">
          About
        </Link>
        <Link smooth to="/#work">
          Work
        </Link>
      </PagesWrapper>
    </Wrapper>
  );
}

export default Navbar;
