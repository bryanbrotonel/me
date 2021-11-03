import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
  border: dotted;

  display: grid;
  grid-gap: 10px;

  justify-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    grid-template-columns: 1fr repeat(2, fit-content(200px));
    grid-gap: 20px;
  }
`;

const LinkWrapper = styled.section`
  border: solid;

  padding: 10px 0;

  &.homeLink {
    grid-column: 1 / 3;

    font-size: larger;
    font-weight: bold;

    @media (min-width: 600px) {
      grid-column: 1 / 2;
      justify-self: start;
    }
  }
`;

function Navbar() {
  const pages = ['home', 'work', 'curriculum vitae'];

  const navLinks = pages.map((page) => {
    return page == 'home' ? (
      <LinkWrapper key={page} className="homeLink">
        <NavLink to={'/'}>Bryan Brotonel</NavLink>
      </LinkWrapper>
    ) : (
      <LinkWrapper key={page}>
        <NavLink to={'/' + encodeURI(page.replace(/\s/g, '-'))}>{page}</NavLink>
      </LinkWrapper>
    );
  });
  return (
    <React.Fragment>
      <Wrapper>{navLinks}</Wrapper>
    </React.Fragment>
  );
}

export default Navbar;
