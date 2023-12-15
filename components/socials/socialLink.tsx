import React, { ReactNode } from 'react';
import Link from 'next/link';

type SocialLinkProps = {
  link: string;
  title: string;
  icon: ReactNode;
};

const SocialLink = ({ link, title, icon }: SocialLinkProps) => {
  return (
    <Link href={link}>
      <div className="flex gap-1">
        {icon}
        <span className="hover:underline hover:underline-offset-4 hover:decoration-2">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default SocialLink;
