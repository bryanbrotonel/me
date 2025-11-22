import React from 'react';
import Image from 'next/image';
import { currentlyDataProps } from 'app/lib/types';
import ScrollableText from './scrollableText';
import ConditionalLink from 'app/ui/conditionalLink';
import Link from 'next/link';

export default function CurrentlyItem({ item }: { item: currentlyDataProps }) {
  const { header, title, subtitle, image, source } = item;

  return (
    <div>
      <div className='flex flex-col'>
        <h1 className='text-neutral-400 text-sm mb-3'>{header}</h1>
        <div className='flex flex-row gap-3'>
          <div>
            <div className={'w-12 overflow-hidden rounded-md'}>
              <Image
                src={image}
                alt={`Artwork of ${title}`}
                width={64}
                height={64}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='text-neutral-50'>{title}</span>
            <span>{subtitle}</span>
          </div>
        </div>
      </div>
      {/* <div className='sm:flex flex-row gap-2 items-center hidden'>
        <span className='whitespace-nowrap text-neutral-400 text-sm'>
          {header}:
        </span>
        <div className={'flex-none w-12 overflow-hidden rounded-md'}>
          <Image
            src={image}
            alt={`Artwork of ${title}`}
            width={64}
            height={64}
          />
        </div>
        <div>
          <span className='text-neutral-50 hover:underline'>{title}</span>{' '}
          <span className='lg:inline'>{subtitle}</span>
        </div>
      </div> */}
    </div>
  );
}
