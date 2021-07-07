import React from "react";
import ReactDOM from "react-dom";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./scenes/App";

import "scss/main.scss";

// Creates history
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
      <App/>
  </Router>,
  document.getElementById("app")
);
