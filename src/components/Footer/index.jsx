import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import SectionTemplate from '../SectionTemplate';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: center;
  margin-top: 4rem;
`;

const Header = styled.span`
  padding: 20px 0;
  font-family: var(--font-primary);
  font-size: var(--text-xxxl);
  font-weight: 600;
`;

const Email = styled.span`
  padding-bottom: 10px;

  font-family: var(--font-primary);
  font-size: var(--text-md);
  text-decoration: none;
  color: currentColor;
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

const SocialButton = styled.button`
  display: inline-block;
  font-size: var(--text-xxl);
  color: currentColor;
  margin: 0 0.5em;
  display: block;

  @media (min-width: 600px) {
    font-size: var(--text-xxl);
  }
`;

const Copyright = styled.span`
  font-family: var(--font-primary);
`;

function footer() {
  return (
    <SectionTemplate>
      <Wrapper>
        <Header>&#x1F91D; Lets Connect &#x1F91D;</Header>
        <Email
          as="a"
          href="mailto:mrbryanbrotonel@gmail.com"
          title="Bryan Brotonel | Mail"
          target="_blank"
        >
          mrbryanbrotonel@gmail.com
        </Email>
        <Socials>
          <SocialButton
            as="a"
            href="https://www.linkedin.com/in/bryanbrotonel/"
            title="Bryan Brotonel | LinkedIn"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialButton>
          <SocialButton
            as="a"
            href="https://github.com/bryanbrotonel"
            title="Bryan Brotonel | GitHub"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialButton>
        </Socials>
        <Info>
          <Copyright>
            &#169; {new Date().getFullYear()}. All Rights Reserved | Vancouver,
            BC
          </Copyright>
        </Info>
      </Wrapper>
    </SectionTemplate>
  );
}

export default footer;