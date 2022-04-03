import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
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
  height: 100%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

const ContentSection = styled.div`
  height: 100%;
  position: relative;
  color: var(--colour-white);
`;

const WorkParagraph = styled.div`
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const Title = styled.h1`
  font-size: var(--text-xl);
  margin-top: 0;
  margin-bottom: 1rem;
`;

function WorkItem(props) {
  const { title, blurb, image, imageTitle } = props;

  return (
    <Wrapper>
      <CardWrapper>
        <ContentSection>
          <CardBackgroundImage src={image} alt={imageTitle} />
        </ContentSection>
      </CardWrapper>
      <WorkParagraph>
        <Title>{title}</Title>
        <ReactMarkdown children={blurb} />
      </WorkParagraph>
    </Wrapper>
  );
}

export default WorkItem;
