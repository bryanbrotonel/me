import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Links from './Links';

import FadeInTransition from '../../../components/FadeInTransition';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

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
  flex-basis: 300px;

  @media (min-width: 768px) {
    flex-basis: 500px;
  }
`;

const Title = styled.h1`
  font-size: var(--text-xl);
  margin: 1rem 0;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

function WorkItem(props) {
  const { title, blurb, image, imageTitle, websiteLink, sourceLink } = props;

  return (
    <Wrapper>
      <FadeInTransition>
        <CardWrapper>
          <CardBackgroundImage src={image} alt={imageTitle} />
        </CardWrapper>
      </FadeInTransition>
      <WorkParagraph>
        <FadeInTransition>
          <Title>{title}</Title>
          <ReactMarkdown children={blurb} />
          <Links
            title={title}
            websiteLink={websiteLink}
            sourceLink={sourceLink}
          />
        </FadeInTransition>
      </WorkParagraph>
    </Wrapper>
  );
}

export default WorkItem;
