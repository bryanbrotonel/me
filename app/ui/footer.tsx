import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <ul className='w-full inline-flex flex-wrap gap-3 justify-center' role='list'>
      {[
        { href: 'mailto:mrbryanbrotonel@gmail.com', label: 'Email' },
        {
          href: 'https://linkedin.com/in/bryanbrotonel',
          label: 'LinkedIn',
        },
        { href: 'https://github.com/bryanbrotonel', label: 'GitHub' },
      ].map(({ href, label }) => (
        <li key={label}>
          <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            className='inline-flex text-xs'
          >
            <span className='text-neutral-400 hover:text-neutral-50 hover:underline'>
              {label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
