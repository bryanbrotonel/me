import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { fetchContentfulData } from '../../helpers';

import * as Contentful from 'contentful';

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
    (async () => {
      const data = (await fetchContentfulData(
        query,
        'asset'
      )) as Contentful.Asset;
      setLogo(data);
    })();
  }, []);

  if (!logo) return null;

  const { title, url } = logo;

  return <LogoImage src={url} alt={title} />;
}

export default Logo;
