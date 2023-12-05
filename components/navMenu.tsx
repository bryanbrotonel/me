import React from 'react';
import Link from 'next/link';
import { Cross } from 'akar-icons';

export default function NevMenu({ toggle }: { toggle: () => void }) {
  const LinkItem = ({ href, children }) => {
    return (
      <Link href={href} onClick={toggle} className="text-xl text-white">
        {children}
      </Link>
    );
  };
  return (
    <div className="fixed z-50 inset-0 space-y-2 bg-black">
      <div className="text-right p-4">
        <button onClick={toggle}>
          <Cross className="text-white" strokeWidth={2.5} size={20} />
        </button>
      </div>
      <div className="space-y-2 px-8">
        <div>
          <LinkItem href="/work">Work</LinkItem>
        </div>
        <div>
          <LinkItem href="/about">About</LinkItem>
        </div>
      </div>
    </div>
  );
}
