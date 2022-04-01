import React, { useState, useEffect } from 'react';

import Work from '../Work';
import About from '../About';

import styled from 'styled-components';

import MastheadHeader from './MastheadHeader';

const MastheadWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;

  @media (min-width: 600px) {
    min-height: 80vh;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8rem;
  }
`;

function Home() {
  return (
    <React.Fragment>
      <MastheadWrapper className="container">
        <MastheadHeader />
      </MastheadWrapper>
        <About />
        <Work />
    </React.Fragment>
  );
}

export default Home;
