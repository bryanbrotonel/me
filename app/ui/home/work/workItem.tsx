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
    <div className='max-w-96'>
      <div className='group'>
        <Link href={websiteLink} target='_blank' rel='noopener noreferrer'>
          <div className='w-full h-56 relative overflow-hidden rounded-lg text-black group-hover-effect'>
            <ContentfulImage
              src={coverImageUrl}
              alt={coverImageTitle}
              fill={true}
              className='object-cover w-full h-full'
            />
          </div>
        </Link>
      </div>
      <div className='py-4 space-y-2'>
        <div className='space-y-2 w-full max-w-sm'>
          <Link href={websiteLink} target='_blank' rel='noopener noreferrer'>
            <h1 className='text-xl font-medium'>{title}</h1>
          </Link>
          <p className='text-sm text-darkGray'>{description}</p>
        </div>
        <div className='flex gap-2 -ml-1.5 -my-1.5'>
          {websiteLink && (
            <div>
              <Link
                href={websiteLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ColouredButton colour={'red'} label='Project' />
              </Link>
            </div>
          )}
          {sourceLink && (
            <div>
              <Link href={sourceLink} target='_blank' rel='noopener noreferrer'>
                <ColouredButton colour={'red'} label='GitHub' />
              </Link>
            </div>
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
