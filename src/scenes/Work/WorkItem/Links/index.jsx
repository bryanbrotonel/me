import React from 'react';

import styled from 'styled-components';

const LinksContainer = styled.section`
  display: inline-block;
`;

const LinksRow = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const LinkButton = styled.button`
  display: inline-block;
  padding: 0.3em 0.75em;

  text-decoration: none;

  color: var(--colour-black);
  background-color: var(--colour-white);
  border: solid 0.1em var(--colour-black);
  border-radius: 0.5em;

  transition: 0.3s ease 0s;

  &:hover {
    color: var(--colour-white);
    background-color: var(--colour-black);
  }
`;

function Links(props) {
  const { title, sourceLink, websiteLink } = props;

  let sourceBtn, websiteBtn;

  if (sourceLink)
    sourceBtn = (
      <LinkButton
        as="a"
        href={sourceLink}
        title={`${title} Source Code`}
        target="_blank"
      >
        <span>Source Code</span>
      </LinkButton>
    );

  if (websiteLink)
    websiteBtn = (
      <LinkButton
        as="a"
        href={websiteLink}
        title={`${title} Website`}
        target="_blank"
      >
        <span>Live Preview</span>
      </LinkButton>
    );

  return (
    <LinksContainer>
      <LinksRow>
        {sourceBtn}
        {websiteBtn}
      </LinksRow>
    </LinksContainer>
  );
}

export default Links;
