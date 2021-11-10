import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 10px;

  justify-items: center;
  justify-content: center;
  padding: 10px 0 !important;

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
  color: #020504;

  @media (min-width: 600px) {
    padding: 10px 0;
  }

  &.homeLink {
    grid-column: 1 / 3;

    font-weight: bold;
    font-size: var(--text-lg);

    color: var(--colour-primary);

    @media (min-width: 600px) {
      grid-column: 1 / 2;
      justify-self: start;
    }
  }
`;

function Navbar() {
  // const pages = ['Home', 'Work', 'Curriculum Vitae'];

  // const navLinks = pages.map((page) => {
  //   return page == 'Home' ? (
  //     <Link key={page} to="/" className="homeLink">
  //       BryanBrotonel
  //     </Link>
  //   ) : (
  //     <Link key={page} to={'/#' + encodeURI(page.replace(/\s/g, '-'))}>
  //       {page}
  //     </Link>
  //   );
  // });
  return (
    <div>
      <Wrapper className="container-sm">
        <Link to="/" className="homeLink">
          BryanBrotonel
        </Link>
        <Link smooth to="/#work">
          Work
        </Link>
        <Link smooth to="/education">
          Education
        </Link>
        <Link smooth to="/resume">
          Resume
        </Link>
      </Wrapper>
    </div>
  );
}

export default Navbar;
