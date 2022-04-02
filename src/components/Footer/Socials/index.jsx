import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';

const SocialsContainer = styled.section`
  display: inline-block;
`;

const SocialsRow = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const SocialButton = styled.button`
  display: inline-block;
  color: currentColor;
  display: block;

  svg {
    font-size: var(--text-xl);
  }

  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

function Socials() {
  return (
    <SocialsContainer>
      <SocialsRow>
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
      </SocialsRow>
    </SocialsContainer>
  );
}

export default Socials;
