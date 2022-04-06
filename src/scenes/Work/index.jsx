import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { fetchContentfulData } from '../../helpers';
import WorkItem from './WorkItem';
import Header from 'Components/Header';
import Button from 'Components/Button';

const WorkWrapper = styled.div`
  margin: 5rem 0;
`;

const WorkHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 5rem 0;
`;

const WorkRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;

  justify-content: center;

  @media (min-width: 768px) {
    gap: 10rem;
  }
`;

function Work() {
  const query = `
    {
      workItemCollection(order: order_ASC) {
        items {
          title
          websiteLink
          sourceLink
          blurb
          coverImage {
            title
            url(transform: {format: WEBP})
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
    <WorkWrapper id ="work" className="container">
      <WorkHeader>
        <Header title={'Look What I Built!'} subtitle={'Work'} centered />
      </WorkHeader>
      <WorkRow>
        {items.map(
          ({
            title,
            websiteLink,
            sourceLink,
            blurb,
            coverImage: { url, title: imageTitle },
          }) => (
            <WorkItem
              key={title}
              title={title}
              blurb={blurb}
              image={url}
              imageTitle={imageTitle}
              websiteLink={websiteLink}
              sourceLink={sourceLink}
            />
          )
        )}
      </WorkRow>
      <Button
        value="more projects"
        title="Bryan Brotonel | GitHub"
        href="https://github.com/bryanbrotonel"
      ></Button>
    </WorkWrapper>
  );
}

export default Work;
