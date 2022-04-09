import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import EmptyPlaceholder from '../../../components/EmptyPlaceholder';

import { fetchContentfulData } from '../../../helpers';

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;
  width: auto;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

const Logo = styled.img`
  position: absolute;
  right: -10%;
  top: -10%;
  width: 20%;
  height: auto;

  animation-name: rotateCenter;
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
          url
        }
      }
    }
  }
  `;

  useEffect(() => {
    fetchContentfulData(query, 'mastheadCollection', setImage);
  }, []);

  if (!mastheadImage) return <EmptyPlaceholder />;

  const { image, logo } = mastheadImage;

  return (
    <ImageWrapper>
      <Image src={image.url} alt="Image" />
      <Logo src={logo.url} alt="Logo" />
    </ImageWrapper>
  );
}

export default ProfileImage;
