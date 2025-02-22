import React from 'react';
import Image from 'next/image';
import { currentlyDataProps } from 'app/lib/types';
import ScrollableText from './scrollableText';
import ConditionalLink from 'app/ui/conditionalLink';

export default function CurrentlyItem({ item }: { item: currentlyDataProps }) {
  const { header, title, subtitle, image, source } = item;

  return (
    <div>
      <div>
        <h6 className='font-light text-xs mb-4'>{header}</h6>
      </div>
      <div className='flex flex-row align-top gap-2'>
        <ConditionalLink className='group' href={source}>
          <div
            className={`w-16 relative overflow-hidden rounded-md ${
              source && 'group-hover-effect'
            }`}
          >
            <Image
              src={image}
              alt={`Artwork of ${title} by ${subtitle}`}
              width={64}
              height={64}
            />
          </div>
        </ConditionalLink>
        <div className='overflow-hidden'>
          <ConditionalLink className='group' href={source}>
            <ScrollableText onLoad={true}>{title}</ScrollableText>
          </ConditionalLink>
          <ScrollableText className='text-xs text-darkGray' onLoad={true}>
            {subtitle}
          </ScrollableText>
        </div>
      </div>
    </div>
  );
}
