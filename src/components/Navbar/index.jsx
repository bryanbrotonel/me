import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 10px;

  justify-items: center;
  justify-content: center;
  padding: 10px 0 !important;

  @media (min-width: 600px) {
    grid-template-columns: 1fr repeat(2, fit-content(200px));
    grid-gap: 20px;
    padding: 20px 0;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px 0;
  font-family: var(--font-primary);
  color: #020504;

  &.homeLink {
    grid-column: 1 / 3;

    font-weight: bold;
    font-size: var(--text-xl);

    color: var(--colour-primary);

    @media (min-width: 600px) {
      grid-column: 1 / 2;
      justify-self: start;
    }
  }
`;

function Navbar() {
  const pages = ['Home', 'Work', 'Curriculum Vitae'];

  const navLinks = pages.map((page) => {
    return page == 'Home' ? (
      <Link key={page} to="/" className="homeLink">
        BryanBrotonel
      </Link>
    ) : (
      <Link key={page} to={'/' + encodeURI(page.replace(/\s/g, '-'))}>
        {page}
      </Link>
    );
  });
  return (
    <div>
      <Wrapper className="container-lg">{navLinks}</Wrapper>
    </div>
  );
}

export default Navbar;
