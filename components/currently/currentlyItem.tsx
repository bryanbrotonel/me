import React from 'react';
import Image from 'next/image';
import { currentlyDataProps } from 'lib/types';
import Link from 'next/link';

export default function CurrentlyItem({ item }: { item: currentlyDataProps }) {
  const { header, content } = item;

  return (
    <div>
      <div>
        <h6 className="font-light text-xs text-white/50 mb-4">{header}</h6>
      </div>
      <div className="flex flex-row align-top gap-3">
        <Link className="group" href={content.source}>
          <div className="w-16 relative overflow-hidden rounded-md group-hover:scale-[1.03] transition ease-linear tran">
            <Image
              src={content.image}
              alt={`${content.title} by ${content.author}`}
              width={64}
              height={64}
              layout="responsive"
            />
          </div>
        </Link>

        <div className="space-y-1">
          <Link className="group" href={content.source}>
            <h1 className="group-hover:underline">{content.title}</h1>
          </Link>
          <p className="text-sm text-white/50">{content.author}</p>
        </div>
      </div>
    </div>
  );
}
