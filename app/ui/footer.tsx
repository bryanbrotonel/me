import React from 'react';
import Link from 'next/link';
import ColouredButton from './colouredButton';
import { Envelope, GithubFill, LinkedinBoxFill } from 'akar-icons';

export default function Footer() {
  return (
    <div className="flex items-start justify-between pt-2.5 mt-7 border-t-[0.5px] border-lightGray/50">
      <div className="flex gap-1 -ml-[6px] -mt-[6px]">
        <Link
          href={'mailto:bryanbrotonel@gmail.com'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColouredButton colour={'gmail'}>
            <Envelope strokeWidth={2} size={20} />
          </ColouredButton>
        </Link>
        <Link
          href={'https://linkedin.com/in/bryanbrotonel'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColouredButton colour={'linkedin'}>
            <LinkedinBoxFill strokeWidth={2} size={20} />
          </ColouredButton>
        </Link>
        <Link
          href={'https://github.com/bryanbrotonel'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ColouredButton colour={'github'}>
            <GithubFill strokeWidth={2} size={20} />
          </ColouredButton>
        </Link>
      </div>
      <div className="inline-flex">
        <span className="text-xs">
          Bryan Brotonel {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
