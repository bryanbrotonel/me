import React, { ReactNode } from 'react';
import Link from 'next/link';

type SocialLinkProps = {
  link: string;
  title: string;
  icon: ReactNode;
};

const SocialLink = ({ link, title, icon }: SocialLinkProps) => {
  return (
    <div className="w-fit">
      <Link href={link}>
        <div className="flex gap-2">
          {icon}
          <span className="hover:translate-x-1 ease-out duration-200">
            {title}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default SocialLink;
