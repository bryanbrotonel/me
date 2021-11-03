import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border: dotted;

  display: grid;
  grid-template-columns: 1fr;

  justify-items: center;
  justify-content: center;
`;

const Email = styled.a`
  padding-bottom: 10px;
  font-weight: bold;
`;

const Info = styled.section`
  padding-bottom: 15px;
`;

const Socials = styled.section`
  display: grid;
  padding-bottom: 40px;

  grid-template-columns: repeat(2, fit-content(200px));
  grid-gap: 10px;
`;

function footer() {
  return (
    <Wrapper>
      <h1>Lets Connect</h1>
      <Email
        href="mailto:mrbryanbrotonel@gmail.com"
        title="Bryan Brotonel | Mail"
        target="_blank"
      >
        mrbryanbrotonel@gmail.com
      </Email>
      <Socials>
        <a
          href="mailto:mrbryanbrotonel@gmail.com"
          title="Bryan Brotonel | LinkedIn"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/bryanbrotonel"
          title="Bryan Brotonel | GitHub"
          target="_blank"
        >
          GitHub
        </a>
      </Socials>
      <Info>
        <h5>
          &#169; {new Date().getFullYear()}. All Rights Reserved | Vancouver, BC
        </h5>
      </Info>
    </Wrapper>
  );
}

export default footer;
