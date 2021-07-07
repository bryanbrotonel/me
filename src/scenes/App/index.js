import React from "react";
import Foo from "components/Foo/index.js";

import "./styles.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Foo: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    import(/* webpackChunkName: 'Foo' */ "components/Foo").then(
      Foo => {
        this.setState({ Foo: Foo.default });
      }
    );
  }
  render() {

    return (
      <div className="app">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quia
          eius numquam. Minima fugit ea sequi dicta vel earum provident placeat
          saepe dolore nulla odit ab, dolorum nisi rerum vero!
        </p>
        {Foo ? <Foo /> : <p>Foo is loading</p>}
      </div>
    );
  }
}

export default App;
