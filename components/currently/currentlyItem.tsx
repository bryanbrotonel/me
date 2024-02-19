import React from 'react';
import Image from 'next/image';
import { currentlyDataProps } from 'lib/types';
import Link from 'next/link';
import ConditionalLink from '../conditionalLink';

export default function CurrentlyItem({ item }: { item: currentlyDataProps }) {
  const {
    header,
    content: { title, author, image, source },
  } = item;

  return (
    <div className="max-w-xs">
      <div>
        <h6 className="font-light text-xs text-white/50 mb-4">{header}</h6>
      </div>
      <div className="flex flex-row align-top gap-3">
        <ConditionalLink className="group" href={source}>
          <div
            className={`w-16 relative overflow-hidden rounded-md ${
              source && 'group-hover:scale-[1.03]'
            } transition ease-linear tran`}
          >
            <Image
              src={image}
              alt={`${title} by ${author}`}
              width={64}
              height={64}
            />
          </div>
        </ConditionalLink>
        <div className="space-y-1">
          <ConditionalLink className="group" href={source}>
            <h1 className={`${source && 'group-hover:underline'} line-clamp-2`}>
              {title}
            </h1>
          </ConditionalLink>
          <p className="text-sm text-white/50 line-clamp-2">{author}</p>
        </div>
      </div>
    </div>
  );
}
