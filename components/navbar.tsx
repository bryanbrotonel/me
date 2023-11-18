import React from 'react';
import ActiveLink from './activeLink';

export default function Navbar() {
  return (
    <div className="w-auto flex flex-col space-y-4 items-center lg:items-start">
      <div className="space-y-2 text-center lg:text-start">
        <h1 className="text-4xl font-bold">BryanBrotonel</h1>
        <h2 className="text-lg">Web Developer from Vancouver, BC</h2>
      </div>
      <div className="flex gap-4">
        <ActiveLink
          activeClassName="font-bold"
          activePathnames={['/work', '/']}
          href="/work"
        >
          Work
        </ActiveLink>
        <ActiveLink activeClassName="font-bold" href="/about">
          About
        </ActiveLink>
      </div>
    </div>
  );
}
