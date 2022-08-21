import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Links from './Links';

import FadeInTransition from '../../../components/FadeInTransition';
import { TypeWorkItem, TypeWorkItemFields } from '../../../types';

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
  max-height: 450px;

  overflow: hidden;
`;

const CardBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

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

function WorkItem(props: { item: any }) {
  const { title, websiteLink, sourceLink, blurb, coverImage } = props.item;

  return (
    <Wrapper>
      <FadeInTransition>
        <CardWrapper>
          <CardBackgroundImage
            src={coverImage.url}
            alt={coverImage.title}
            width="600"
            height="450"
          />
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
