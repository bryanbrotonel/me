import { LinkOut, GithubFill } from 'akar-icons';
import ContentfulImage from 'lib/contentful-image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    <div className="w-full max-w-sm lg:max-w-3xl flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4">
      <div className="group">
        <div className="w-full lg:w-[22rem] h-60 -z-10 relative overflow-hidden rounded-lg bg-slate-900 text-white">
          <ContentfulImage
            src={coverImageUrl}
            alt={coverImageTitle}
            fill={true}
            className="object-cover group-hover:scale-[1.03] transition ease-linear"
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {stack.map((item) => (
            <span key={item} className="text-gray-500 rounded-lg text-xs">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-5">
          <div>
            <Link
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-950 hover:opacity-80"
            >
              <GithubFill strokeWidth={2} size={22} />
            </Link>
          </div>
          <div>
            <Link
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-950 hover:opacity-80"
            >
              <LinkOut strokeWidth={2} size={22} />
            </Link>
          </div>
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
