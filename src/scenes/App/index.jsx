import React from "react";
import Title from "components/Title";
import ProfileBlurb from "components/ProfileBlurb";
import ProfilePicture from "components/ProfilePicture";
import Socials from "components/Socials";

import "./styles.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Title />
          <ProfilePicture />
          <ProfileBlurb />
          <Socials />
        </div>
      </div>
    );
  }
}

export default App;
