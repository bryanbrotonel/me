import { ContentfulClientApi } from 'contentful';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';

import { fetchContentfulData } from '../../helpers';

import * as Contentful from 'contentful';

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 0;
`;

function Error() {
  const [errorImage, setImage] = useState(null);

  const query = `
  {
    asset(id: "2N6sX87AaVL4e9tpzxhQHT") {
      title
      url(transform: {
        width: 600,
        resizeStrategy: FIT, 
        resizeFocus: BOTTOM, 
        format: WEBP})
    }
  }
  `;

  useEffect(() => {
    fetchContentfulData(query, 'asset').then((data) => {
      setImage(data);
    });
  }, []);

  return (
    <ErrorWrapper>
      <div>
        {errorImage != null && <img src={errorImage.fields.file.url} alt="" />}
        <h1>Lost? Let's get you back on track.</h1>{' '}
        <Button
          value="Let's Go"
          title="Bryan Brotonel | Home"
          href="/"
          target={false}
        ></Button>
      </div>
    </ErrorWrapper>
  );
}

export default Error;
