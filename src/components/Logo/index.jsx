import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { fetchContentfulData } from '../../helpers';

const LogoImage = styled.img`
  height: auto;
  width: 100%;

  animation-name: rotateCenter;
  animation-duration: 50s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

function Logo() {
  const [logo, setLogo] = useState(null);

  const query = `
  {
    asset(id: "4RxkeMgSdU01LZiPm9tP0v") {
      title
      url
    }
  }
  `;

  useEffect(() => {
    fetchContentfulData(query, 'asset', setLogo);
  }, []);

  if (!logo) return null;

  return <LogoImage src={logo.url} alt="Logo" />;
}

export default Logo;
