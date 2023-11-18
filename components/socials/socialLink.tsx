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
      <div className="flex gap-2">
        {icon}
        <span className="hover:font-medium">{title}</span>
      </div>
    </Link>
  );
};

export default SocialLink;
