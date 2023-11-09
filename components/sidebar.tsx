import React from 'react';
import ActiveLink from './activeLink';

export default function Sidebar() {
  return (
    <div className="w-auto flex flex-col space-y-2">
      <h1 className="text-4xl font-bold">Bryan Brotonel</h1>
      <h2 className="text-lg">Web Developer from Vancouver, BC</h2>
      <div className="flex gap-4">
        <ActiveLink activeClassName="font-bold" href="/work">
          Work
        </ActiveLink>
        <ActiveLink activeClassName="font-bold" href="/about">
          About
        </ActiveLink>
      </div>
    </div>
  );
}
