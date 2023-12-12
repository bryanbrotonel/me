import React, { useState } from 'react';
import { ThreeLineHorizontal } from 'akar-icons';
import NavMenu from './navMenu';
import ActiveLink from './activeLink';
import Link from 'next/link';

export default function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };

  return (
    <div className="w-auto flex md:flex-col justify-between p-4 md:p-0 md:space-y-4 items-start bg-white border-b-2 border-slate-100 md:border-0">
      <div className="space-y-1 md:p-0">
        <div className="w-fit md:mb-5">
          <Link href="/work">
            <h1 className="text-xl md:text-5xl font-bold">BryanBrotonel</h1>
          </Link>
        </div>
        <h2 className="text-sm md:text-lg">Web Developer from Vancouver, BC</h2>
      </div>
      <div className="block md:hidden" onClick={toggleNavMenu}>
        <ThreeLineHorizontal strokeWidth={2.5} size={20} />
      </div>
      <div className="hidden md:flex gap-4">
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
      {isNavMenuOpen && <NavMenu toggle={toggleNavMenu} />}
    </div>
  );
}
