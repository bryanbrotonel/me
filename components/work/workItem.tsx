import { GithubFill, Globe } from 'akar-icons';
import ContentfulImage from 'lib/contentful-image';
import Link from 'next/link';
import React from 'react';
import ColouredButton from '../colouredButton';

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
    <div className="w-full max-w-sm flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-sans font-semibold mb-2">{title}</h3>
        <div className="group">
          <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-60 -z-10 relative overflow-hidden rounded-lg text-black">
              <ContentfulImage
                src={coverImageUrl}
                alt={coverImageTitle}
                fill={true}
                className="object-cover group-hover:scale-[1.015] transition ease-linear"
              />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-sm mt-1">{description}</p>
        {stack && (
          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((item) => (
              <span key={item} className="opacity-75 rounded-lg text-xs">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end gap-2">
        {sourceLink && (
          <div>
            <Link href={sourceLink} target="_blank" rel="noopener noreferrer">
              <ColouredButton colour={'github'} label={'Github'} border>
                <GithubFill strokeWidth={1} size={18} />
              </ColouredButton>
            </Link>
          </div>
        )}
        {websiteLink && (
          <div>
            <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
              <ColouredButton colour={'red'} label={'Website'} border>
                <Globe strokeWidth={1} size={18} />
              </ColouredButton>
            </Link>
          </div>
        )}
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
