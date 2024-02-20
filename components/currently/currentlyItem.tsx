import React from 'react';
import Image from 'next/image';
import { currentlyDataProps } from 'lib/types';
import ConditionalLink from '../conditionalLink';
import ScrollableText from './scrollableText';

export default function CurrentlyItem({ item }: { item: currentlyDataProps }) {
  const { header, title, subtitle, image, source } = item;

  return (
    <div className="md:max-w-xs">
      <div>
        <h6 className="font-light text-xs text-white/50 mb-4">{header}</h6>
      </div>
      <div className="flex flex-row align-top gap-2">
        <ConditionalLink className="group" href={source}>
          <div
            className={`w-16 relative overflow-hidden rounded-md ${
              source && 'group-hover:scale-[1.03]'
            } transition ease-linear tran`}
          >
            <Image
              src={image}
              alt={`${title} by ${subtitle}`}
              width={64}
              height={64}
            />
          </div>
        </ConditionalLink>
        <div className="space-y-1 overflow-hidden">
          <ConditionalLink className="group" href={source}>
            <ScrollableText className={source && 'group-hover:underline'}>
              {title}
            </ScrollableText>
          </ConditionalLink>
          <ScrollableText className="text-sm text-white/50 text-clip">
            {subtitle}
          </ScrollableText>
        </div>
      </div>
    </div>
  );
}
