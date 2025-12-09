import React from 'react';
import Image from 'next/image';
import { currentlyDataProps } from 'app/lib/types';
import Link from 'next/link';

export default function CurrentlyItem({ item }: { item: currentlyDataProps }) {
  const { header, title, subtitle, image, source } = item;

  return (
    <div className='flex flex-col md:flex-row md:items-center gap-3'>
      <div className='text-nowrap'>
        <h1 className='text-neutral-400 text-sm'>
          {header}
          <span className='hidden md:inline'>:</span>
        </h1>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <Link href={source} target='_blank' rel='noopener noreferrer'>
          <div className={'w-12 overflow-hidden rounded-md'}>
            <Image
              src={image}
              alt={`Artwork of ${title}`}
              width={64}
              height={64}
            />
          </div>
        </Link>
        <div>
          <Link href={source} target='_blank' rel='noopener noreferrer'>
            <span className='text-neutral-50 hover:underline'>{title}</span>{' '}
          </Link>
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
