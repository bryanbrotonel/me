import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fetchContentfulData } from '../../helpers';

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 0;
`;

const WorkButton = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--colour-primary);
  border-radius: 6px;

  background-color: var(--colour-primary);
  color: var(--colour-white);
  text-decoration: none;
  font-family: var(--font-secondary);
  font-size: var(--text-md);
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }
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
    fetchContentfulData(query, 'asset', setImage);
  }, []);

  return (
    <ErrorWrapper>
      <div>
        {errorImage != null && <img src={errorImage.url} alt="" />}
        <h1>Lost? Let's get you back on track.</h1>
        <Link to="/">
          <WorkButton>Let's Go</WorkButton>
        </Link>
      </div>
    </ErrorWrapper>
  );
}

export default Error;
