import React from 'react';

import Routes from '../../routes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <div id="body">
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
