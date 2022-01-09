import React from 'react';

import styled from 'styled-components';

const Content = styled.div`
  padding-bottom: 7rem;

  background-color: var(--colour-white);
  color: var(--colour-primary);
  &:nth-of-type(2n + 1) {
    background-color: var(--colour-primary);
    color: var(--colour-white);
  }
`;

const SectionHeader = styled.h1`
  font-size: var(--text-xxxl);
  text-align: center;
  margin-bottom: 4rem;
`;

function SectionTemplate(props) {
  const { title, anchor, children } = props;

  let header;

  if (title)
    header = <SectionHeader>{title}</SectionHeader>;

  return (
    <Content id={anchor}>
      {header}
      {children}
    </Content>
  );
}

export default SectionTemplate;
