import React from "react";
import Foo from "components/Foo/index.js";

import "./styles.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      CaptainKirkBio: {},
      Foo: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.onGetKirkBio = this.onGetKirkBio.bind(this);
  }

  componentDidMount() {
    this.onGetKirkBio();
    import(/* webpackChunkName: 'Foo' */ "components/Foo").then(
      Foo => {
        this.setState({ Foo: Foo.default });
      }
    );
  }

  onGetKirkBio = async () => {
    try {
      const result = await fetch(
        "http://stapi.co/api/v1/rest/character/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: {
            title: "James T. Kirk",
            name: "James T. Kirk"
          }
        }
      );

      const resultJSON = await result.json();
      const character = resultJSON.characters[0];
      this.setState({ CaptainKirkBio: character });
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    const { CaptainKirkBio, Foo } = this.state;

    return (
      <div className="app">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quia
          eius numquam. Minima fugit ea sequi dicta vel earum provident placeat
          saepe dolore nulla odit ab, dolorum nisi rerum vero!
        </p>

        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
            <p style={{ wordBreak: "break-all" }}>
              {JSON.stringify(CaptainKirkBio)}
            </p>
          )}
        </section>
        {Foo ? <Foo /> : <p>Foo is loading</p>}
      </div>
    );
  }
}

export default App;
