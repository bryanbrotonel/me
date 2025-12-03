import React from 'react';
import ContentfulImage from 'app/ui/contentful-image';
import Link from 'next/link';
import ColouredButton from '../../colouredButton';

export default function WorkItem({
  title,
  description,
  coverImageTitle,
  coverImageUrl,
  stack,
  websiteLink,
  sourceLink,
}) {
  return (
    <div className='md:flex md:gap-4'>
      <div className='w-full max-w-80 h-48 relative rounded-lg overflow-hidden'>
        <Link href={websiteLink} target='_blank' rel='noopener noreferrer'>
          <ContentfulImage
            src={coverImageUrl}
            alt={coverImageTitle}
            fill={true}
            className='w-full h-full object-cover'
          />
        </Link>
      </div>
      <div className='my-4 space-y-2 md:my-0'>
        <div className='space-y-2 w-full max-w-sm'>
          <Link href={websiteLink} target='_blank' rel='noopener noreferrer'>
            <span className='text-neutral-50 hover:underline'>{title}</span>{' '}
          </Link>
          <span className='text-sm'>{description}</span>
        </div>
        <div className='flex space-x-4'>
          {websiteLink && (
            <Link href={websiteLink} target='_blank' rel='noopener noreferrer'>
              <span className='text-sm hover:text-neutral-50 hover:underline'>Project</span>
            </Link>
          )}
          {sourceLink && (
            <Link
              className='hover:text-neutral-50'
              href={sourceLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='text-sm hover:text-neutral-50 hover:underline'>GitHub</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

WorkItem.defaultProps = {
  image: '',
  stack: [],
  websiteLink: '',
  sourceLink: '',
};
