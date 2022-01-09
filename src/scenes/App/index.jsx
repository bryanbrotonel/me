import React from 'react';
import styled from 'styled-components';

import Routes from '../../routes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Container = styled.section`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const SectionWrapper = styled.div`
  padding-bottom: 7rem;

  background-color: var(--colour-white);
  color: var(--colour-primary);
  &:nth-of-type(2n + 1) {
    background-color: var(--colour-primary);
    color: var(--colour-white);
  }
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Routes />
      <Footer />
    </Container>
  );
};

export default App;
