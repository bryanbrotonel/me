import React from 'react';

import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const WorkButton = styled.button`
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid var(--colour-primary);

  background-color: var(--colour-primary);
  color: var(--colour-white);
  text-decoration: none;
  text-transform: capitalize;
  font-family: var(--font-secondary);
  font-size: var(--text-md);

  &:hover {
    filter: brightness(120%);
    transition-duration: 0.5s;
  }
`;

function Button(props: {
  href: string;
  title: string;
  value: string;
  target: boolean;
}) {
  const { href, title, value, target } = props;
  return (
    <ButtonWrapper>
      <WorkButton
        as="a"
        href={href}
        title={title}
        target={target ? '_blank' : ''}
      >
        {value}
      </WorkButton>
    </ButtonWrapper>
  );
}

export default Button;
