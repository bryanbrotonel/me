import React, { useState, useEffect } from 'react';

import Work from '../Work';
import About from '../About';
import SectionTemplate from '../../components/SectionTemplate';

import styled from 'styled-components';

import MastheadImage from './MastheadImage';
import MastheadHeader from './MastheadHeader';

const MastheadWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;

  @media (min-width: 600px) {
    min-height: 70vh;
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
        <MastheadImage />
        <MastheadHeader />
      </MastheadWrapper>
      <SectionTemplate anchor="about" title="About">
        <About />
      </SectionTemplate>
      <SectionTemplate anchor="work" title="Recent Work">
        <Work />
      </SectionTemplate>
    </React.Fragment>
  );
}

export default Home;
