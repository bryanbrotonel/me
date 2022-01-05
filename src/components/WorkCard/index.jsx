import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.section`
  height: 300px;
  min-width: 100%;
  max-width: 400px;
  border: 7px solid var(--colour-primary);
  overflow: hidden;
`;

const CardBackgroundImage = styled.div`
  width: 100%;
  height: 100%;

  background: linear-gradient(0deg, var(--colour-black) 10%, transparent 100%),
    url(${(props) => props.img});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentSection = styled.div`
  height: 100%;
  position: relative;
  color: var(--colour-white);
`;

const Title = styled.h1`
  text-decoration: none;
  margin: 0;
  padding: 10px;
  font-family: var(--font-secondary);

  position: absolute;
  bottom: 0;
  left: 0;
`;

function WorkCard(props) {
  const { title, image, imageTitle } = props;

  return (
    <CardWrapper>
      <ContentSection>
        <CardBackgroundImage
          img={image}
          aria-label={imageTitle}
        ></CardBackgroundImage>
        <Title>{title}</Title>
      </ContentSection>
    </CardWrapper>
  );
}

export default WorkCard;
