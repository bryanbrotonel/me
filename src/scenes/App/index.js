import React from "react";
import Title from "components/Title";

import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Title />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quia
          eius numquam. Minima fugit ea sequi dicta vel earum provident placeat
          saepe dolore nulla odit ab, dolorum nisi rerum vero!
        </p>
      </div>
    );
  }
}

export default App;
