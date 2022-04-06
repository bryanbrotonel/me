import React from 'react';
import styled from 'styled-components';

import { NavHashLink } from 'react-router-hash-link';

const NavContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  
  padding: 1rem 0;
  z-index: 1;
  background: var(--colour-white);
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
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
  font-size: var(--text-sm);
  color: var(--colour-black);

  &.homeLink {
    font-weight: bold;
    font-size: var(--text-lg);
    color: var(--colour-primary);
  }

  @media (min-width: 600px) {
    font-size: var(--text-md);
  }

  &:hover {
    color: var(--colour-primary);
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <NavWrapper className="container-sm">
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
          <Link smooth to="/#contact">
            Contact
          </Link>
        </PagesWrapper>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
