import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';

import { fetchContentfulData } from '../../../helpers';

const fadeInRight = keyframes`
  0% {
    -webkit-transform: translateX(50px);
            transform: translateX(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const Image = styled.img`
  max-width: 300px;
  margin-bottom: 1rem;

  animation-name: ${fadeInRight};
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  @media (min-width: 992px) {
    max-width: 450px;
    margin: 0;
  }
`;

function MastheadImage() {
  const query = `
  {
    mastheadCollection{
      items {
        image{
          url
        }
      }
    }
  }
  `;

  const [mastheadImage, setImage] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setImage);
  }, []);

  if (!mastheadImage) return <div></div>;

  const { image } = mastheadImage;

  return <Image src={image.url} alt="Image" />;
}

export default MastheadImage;
