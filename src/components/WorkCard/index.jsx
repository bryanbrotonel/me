import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.section`
  max-width: 400px;
  max-height: 300px;
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
  const { image, imageTitle } = props;

  return (
    <CardWrapper>
      <ContentSection>
        <CardBackgroundImage src={image} alt={imageTitle} />
      </ContentSection>
    </CardWrapper>
  );
}

export default WorkCard;
