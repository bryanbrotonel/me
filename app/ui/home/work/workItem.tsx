'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';

interface WorkItemProps {
  title: string;
  description: string;
  link: string;
  slug: string;
  state: 'active' | 'inactive' | 'default';
  setState?: (active: string | null) => void;
}

export default function WorkItem({
  title,
  description,
  link,
  slug,
  state,
  setState,
}: WorkItemProps) {
  const handleMouseEnter = useCallback(
    () => setState?.(slug),
    [slug, setState]
  );
  const handleMouseLeave = useCallback(() => setState?.(null), [setState]);

  const isInactive = state === 'inactive';

  return (
    <div className='group'>
      <div
        className='inline'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          className={`text-neutral-50 transition-colors duration-300 hover:underline font-medium ${
            isInactive ? 'lg:text-neutral-400' : ''
          }`}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {title}
        </Link>
      </div>{' '}
      <span className='text-sm'>{description}</span>
    </div>
  );
}
