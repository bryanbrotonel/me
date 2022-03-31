import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  text-align: ${props => props.centered ? 'center' : ''};
`;

const Subtitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-family: var(--font-secondary);
  color: var(--colour-primary);
`;

const Title = styled.h1`
  margin: 0;
  font-size: var(--text-xxxl);
  color: var(--colour-black);
`;

function Header(props) {
  const { subtitle, title } = props;

  return (
    <Wrapper>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Header;
