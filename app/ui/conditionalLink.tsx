import React from 'react';
import Link, { LinkProps } from 'next/link';

type ConditionalLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export default function ConditionalLink({
  href,
  children,
  className,
}: ConditionalLinkProps) {
  if (href !== null) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <div className={className}>{children}</div>;
}
