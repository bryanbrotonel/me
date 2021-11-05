import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './scenes/App';

import GlobalStyle from './styles/globalStyles';

// Creates history
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('app')
);
