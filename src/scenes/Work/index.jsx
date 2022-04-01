import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { fetchContentfulData } from '../../helpers';
import WorkItem from './WorkItem';

const WorkRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10em;

  justify-content: center;

  @media (min-width: 768px) {
    gap: 10rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
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

  &:hover {
    filter: brightness(120%);
  }
`;

function Work() {
  const query = `
    {
      workItemCollection(order: order_ASC) {
        items {
          title
          link
          coverImage {
            title
            url(transform: {
              format: WEBP
            })
          }
        }
      }
    }
  `;

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchContentfulData(query, 'workItemCollection', setItems);
  }, []);

  if (!items) return <div></div>;

  return (
    <div className="container">
      <WorkRow>
        {items.map(
          ({ title, link, coverImage: { url, title: imageTitle } }) => (
            <WorkItem
              key={title}
              title={title}
              image={url}
              imageTitle={imageTitle}
              link={link}
            />
          )
        )}
      </WorkRow>
      <ButtonWrapper>
        <WorkButton
          as="a"
          href="https://github.com/bryanbrotonel"
          title="Bryan Brotonel | GitHub"
          target="_blank"
        >
          More Projects
        </WorkButton>
      </ButtonWrapper>
    </div>
  );
}

export default Work;