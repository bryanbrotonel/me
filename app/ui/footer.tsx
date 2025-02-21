import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='flex justify-between pt-2.5 mt-7 border-t border-darkgray'>
      <div className='inline-flex gap-4'>
        <Link
          href={'mailto:bryanbrotonel@gmail.com'}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <span className='text-xs font-bold'>Email</span>
        </Link>
        <Link
          href={'https://linkedin.com/in/bryanbrotonel'}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <span className='text-xs font-bold'>LinkedIn</span>
        </Link>
        <Link
          href={'https://github.com/bryanbrotonel'}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex'
        >
          <span className='text-xs font-bold'>GitHub</span>
        </Link>
      </div>
      <div className='inline-flex'>
        <span className='text-xs'>
          Bryan Brotonel {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
