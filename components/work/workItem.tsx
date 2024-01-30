import { ArrowUpRight, GithubFill } from 'akar-icons';
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
    <div className="w-full flex flex-col md:flex-row gap-4">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="group">
          <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
            <div className="w-full max-w-md h-56 md:w-60 md:h-36 relative overflow-hidden rounded-lg text-white">
              <ContentfulImage
                src={coverImageUrl}
                alt={coverImageTitle}
                fill={true}
                className="object-cover group-hover:scale-[1.015] transition ease-linear"
              />
            </div>
          </Link>
        </div>
        <div className="space-y-2 w-full max-w-sm">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm text-white/50">{description}</p>
        </div>
      </div>
      <div className="justify-self-end flex flex-row md:flex-col items-end -ml-[6px] md:ml-0">
        {websiteLink && (
          <div>
            <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
              <ColouredButton colour={'red'}>
                <ArrowUpRight strokeWidth={2} size={18} />
              </ColouredButton>
            </Link>
          </div>
        )}
        {sourceLink && (
          <div>
            <Link href={sourceLink} target="_blank" rel="noopener noreferrer">
              <ColouredButton colour={'github'}>
                <GithubFill strokeWidth={1} size={18} />
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
