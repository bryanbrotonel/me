import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { fetchContentfulData } from '../../helpers';
import WorkCard from '../../components/WorkCard';

const WorkGrid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-gap: 50px;

  grid-template-columns: repeat(auto-fit, minmax(auto, 400px));
`;

const WorkContent = styled.div`
  grid-column: 1 / -1;
  padding-bottom: 100px;
  text-align: center;

  &:last-of-type {
    margin-top: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WorkHeader = styled.h1`
  font-size: var(--text-xxxl);

  margin-bottom: 16px;
`;

const WorkLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const WorkButton = styled.button`
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--colour-primary);
  border-radius: 6px;
  align-self: center;

  background-color: var(--colour-primary);
  color: white;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg {
      animation: tada;
      animation-duration: 2s;
    }
  }

  svg {
    font-size: var(--text-xl);
  }

  span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  @media (min-width: 600px) {
    font-size: var(--text-md);
    svg {
      font-size: var(--text-lg);
    }
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

  if (!items) return 'Loading...';

  return (
    <div className="container">
      <WorkContent>
        <WorkHeader>Work</WorkHeader>
        <span>Check out my recent projects!</span>
      </WorkContent>
      <WorkGrid>
        {items.map(
          ({ title, link, coverImage: { url, title: imageTitle } }) => (
            <div key={title}>
              <WorkLink href={`${encodeURI(link)}`} target="_blank">
                <WorkCard title={title} image={url} imageTitle={imageTitle} />
              </WorkLink>
            </div>
          )
        )}
      </WorkGrid>
      <WorkContent>
        <WorkButton
          as="a"
          href="https://github.com/bryanbrotonel"
          title="Bryan Brotonel | GitHub"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>&nbsp; Check out more of my projects!</span>
        </WorkButton>
      </WorkContent>
    </div>
  );
}

export default Work;
