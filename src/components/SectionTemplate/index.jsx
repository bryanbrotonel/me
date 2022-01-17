import React from 'react';

import styled from 'styled-components';

const Content = styled.div`
  padding: 10rem 0;
  background-color: var(--colour-white);
  color: var(--colour-primary);
  &:nth-of-type(2n + 1) {
    background-color: var(--colour-primary);
    color: var(--colour-white);
  }
`;

const SectionHeader = styled.h1`
  font-size: var(--text-xxl);
  line-height: 1;
  text-align: center;
  margin-top: 0;
  margin-bottom: 2rem;
`;

function SectionTemplate(props) {
  const { title, anchor, children } = props;

  return (
    <Content id={anchor}>
      {title ? <SectionHeader>{title}</SectionHeader> : ''}
      {children}
    </Content>
  );
}

export default SectionTemplate;
