import React from 'react';

import Work from '../Work';
import About from '../About';
import Contact from '../Contact';

import styled from 'styled-components';

import Masthead from '../../components/Masthead';

const HomeContainer = styled.div`
  & > div {
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    & > div {
      margin-bottom: 12rem;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Masthead />
      <About />
      <Work />
      <Contact />
    </HomeContainer>
  );
}

export default Home;
