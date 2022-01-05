import React from 'react';
import styled from 'styled-components';

import { NavHashLink } from 'react-router-hash-link';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 10px;

  justify-items: center;
  justify-content: center;
  padding: 50px 0 !important;

  @media (min-width: 600px) {
    grid-template-columns: 1fr repeat(3, fit-content(200px));
    grid-gap: 20px;
    padding: 20px 0;
  }
`;

const Link = styled(NavHashLink)`
  text-decoration: none;
  align-self: center;

  font-family: var(--font-primary);
  font-size: var(--text-md);

  color: #020504;

  @media (min-width: 600px) {
    padding: 0 2rem;
  }

  &.homeLink {
    grid-column: 1 / 3;
    text-align: center;

    font-weight: bold;
    font-size: var(--text-lg);

    color: var(--colour-primary);
    width: 100%;

    @media (min-width: 600px) {
      text-align: start;
      grid-column: 1 / 2;
      justify-self: start;
    }
  }
`;

function Navbar() {
  return (
    <div>
      <Wrapper className="container-sm">
        <Link to="/" className="homeLink">
          BryanBrotonel
        </Link>
        <Link smooth to="/#about">
          About
        </Link>
        <Link smooth to="/#work">
          Work
        </Link>
      </Wrapper>
    </div>
  );
}

export default Navbar;
