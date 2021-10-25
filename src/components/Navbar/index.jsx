import React from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
  const pages = ['home', 'work', 'curriculum vitae'];

  const navLinks = pages.map((page) => {
    return (
      <li key={page}>
        <NavLink to={'/' + encodeURI(page)}>{page}</NavLink>
      </li>
    );
  });
  return <React.Fragment>{navLinks}</React.Fragment>;
}

export default Navbar;
