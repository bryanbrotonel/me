import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Links from './Links';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 1em;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2em;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      text-align: right;
    }
  }
`;

const CardWrapper = styled.section`
  max-width: 600px;
  max-height: 500px;

  width: auto;
  height: auto;

  overflow: hidden;
`;

const CardBackgroundImage = styled.img`
  width: 100%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const WorkParagraph = styled.div`
  flex-basis: 500px;
`;

const Title = styled.h1`
  font-size: var(--text-xl);
  margin-top: 0;
  margin-bottom: 1rem;
`;

function WorkItem(props) {
  const { title, blurb, image, imageTitle, websiteLink, sourceLink } = props;

  return (
    <Wrapper>
      <CardWrapper>
        <CardBackgroundImage src={image} alt={imageTitle} />
      </CardWrapper>
      <WorkParagraph>
        <Title>{title}</Title>
        <ReactMarkdown children={blurb} />
        <Links
          title={title}
          websiteLink={websiteLink}
          sourceLink={sourceLink}
        />
      </WorkParagraph>
    </Wrapper>
  );
}

export default WorkItem;
