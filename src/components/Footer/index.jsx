import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SectionTemplate from '../SectionTemplate';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  gap: 3rem;
  align-items: center;
  align-content: center;
`;

const Header = styled.span`
  font-family: var(--font-primary);
  font-size: var(--text-xxxl);
  font-weight: 600;
  line-height: 1;
`;

const Socials = styled.section`
  display: flex;
  gap: 2rem;
  flex-direction: row;
`;

const SocialButton = styled.button`
  display: inline-block;
  line-height: 1;
  color: currentColor;
  display: block;

  svg {
    font-size: var(--text-xxl);
  }

  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.05);
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
        <Socials>
          <SocialButton
            as="a"
            href="mailto:mrbryanbrotonel@gmail.com"
            title="Bryan Brotonel | Email"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialButton>
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
        <section>
          <Copyright>
            &#169; {new Date().getFullYear()}. All Rights Reserved | Vancouver,
            BC
          </Copyright>
        </section>
      </Wrapper>
    </SectionTemplate>
  );
}

export default footer;