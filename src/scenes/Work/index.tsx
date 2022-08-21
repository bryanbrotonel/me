import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { fetchContentfulData } from '../../helpers';

import WorkItem from './WorkItem';
import Header from '../../components/Header';
import Button from '../../components/Button';
import EmptyPlaceholder from '../../components/EmptyPlaceholder';
import { TypeWorkItem, TypeWorkItemFields } from '../../types';
import { EntryCollection } from 'contentful';

const WorkHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 2rem;

  @media (min-width: 768px) {
    padding-bottom: 4rem;
  }
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
    (async () => {
      const data = (await fetchContentfulData(
        query,
        'workItemCollection'
      )) as EntryCollection<TypeWorkItem>;
      setItems(data);
    })();
  }, []);

  if (!items) return <EmptyPlaceholder />;

  let itemsList;

  if (items) {
    itemsList = items.map((item: TypeWorkItemFields, index: number) => {
      return <WorkItem key={index} item={item} />;
    });
  }

  return (
    <div id="work" className="container">
      <WorkHeader>
        <Header title={'Look What I Built!'} subtitle={'Work'} centered />
      </WorkHeader>
      <WorkRow>{itemsList}</WorkRow>
      <Button
        value="more projects"
        title="Bryan Brotonel | GitHub"
        href="https://github.com/bryanbrotonel"
        target={false}
      ></Button>
    </div>
  );
}

export default Work;
