import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';

import { fetchContentfulData } from '../../../helpers';

const fadeInUp = keyframes`
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const rotateCenter = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  opacity: 0;

  animation-name: ${fadeInUp};
  animation-duration: 2000ms;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  right: -15%;
  top: -12.5%;
  width: 30%;
  height: auto;

  animation-name: ${rotateCenter};
  animation-duration: 20s;
  animation-delay: 3s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

function ProfileImage() {
  const [mastheadImage, setImage] = useState(null);

  const query = `
  {
    mastheadCollection{
      items {
        image{
          url(transform: {
            format: WEBP
          })
        }
        logo{
          url(transform: {
            format: WEBP,
            width: 135
          })
        }
      }
    }
  }
  `;

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setImage);
  }, []);

  if (!mastheadImage) return <div></div>;

  const { image, logo } = mastheadImage;

  return (
    <ImageWrapper>
      <Image src={image.url} alt="Image" />
      <Logo src={logo.url} alt="Logo" />
    </ImageWrapper>
  );
}

export default ProfileImage;
