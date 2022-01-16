import React, { useState, useEffect } from 'react';

import Work from '../Work';
import About from '../About';
import SectionTemplate from '../../components/SectionTemplate';

import styled from 'styled-components';

import MastheadImage from './MastheadImage';
import MastheadHeader from './MastheadHeader';

const MastheadWrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
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
