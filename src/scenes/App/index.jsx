import React from 'react';
import styled from 'styled-components';

import Routes from '../../routes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Container = styled.section`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 0 20px;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <div>
        <Routes />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
