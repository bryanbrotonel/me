'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import WorkItem from './workItem';
import { workDataProps } from 'app/lib/types';

export default function Work({ data }: { data?: workDataProps[] }) {
  const [currentItemSlug, setCurrentItemSlug] = useState<string | null>(null);

  const currentItem = useMemo(() => {
    return data?.find((item) => item.slug === currentItemSlug) ?? null;
  }, [data, currentItemSlug]);

  const renderMedia = useCallback((media: workDataProps['coverMedia']) => {
    const { contentType, url, title, width, height } = media;

    if (contentType.startsWith('image/')) {
      return (
        <div className='h-fit w-fit max-w-full rounded-md overflow-hidden'>
          <Image src={url} alt={title} width={width} height={height} priority />
        </div>
      );
    }

    if (contentType.startsWith('video/')) {
      return (
        <video
          width={width}
          height={height}
          muted
          loop
          autoPlay
          className='h-fit max-h-full rounded-md overflow-hidden'
        >
          <source src={url} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      );
    }

    return null;
  }, []);

  const getItemState = useCallback(
    (itemSlug: string): 'active' | 'inactive' | 'default' => {
      if (currentItem?.slug === itemSlug) return 'active';
      return currentItem ? 'inactive' : 'default';
    },
    [currentItem]
  );

  return (
    <div className='flex gap-10'>
      <div className='flex-2 space-y-6'>
        {data?.map(({ slug, title, blurb, websiteLink }) => (
          <WorkItem
            key={slug}
            title={title}
            description={blurb}
            link={websiteLink}
            slug={slug}
            state={getItemState(slug)}
            setState={setCurrentItemSlug}
          />
        ))}
      </div>
      <div className='hidden lg:block flex-1 relative'>
        <div
          className={`absolute -top-3 w-80 h-[110%] flex justify-center transition-opacity duration-200 ${
            currentItem ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='h-full flex justify-center'>
            {currentItem && renderMedia(currentItem.coverMedia)}
          </div>
        </div>
      </div>
    </div>
  );
}
