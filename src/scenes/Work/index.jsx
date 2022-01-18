import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { fetchContentfulData } from '../../helpers';
import WorkCard from '../../components/WorkCard';

const WorkGrid = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;

  justify-content: center;
`;

const WorkItem = styled.div`
  height: auto;
  flex-basis: 400px;
  margin-top: 1rem;
`;

const WorkLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
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
      workItemCollection {
        items {
          title
          link
          coverImage {
            title
            url
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
      <WorkGrid>
        {items.map(
          ({ title, link, coverImage: { url, title: imageTitle } }) => (
            <WorkItem key={title}>
              <WorkLink href={`${encodeURI(link)}`} target="_blank">
                <WorkCard title={title} image={url} imageTitle={imageTitle} />
              </WorkLink>
            </WorkItem>
          )
        )}
      </WorkGrid>
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
