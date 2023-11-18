import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren, useState, useEffect } from 'react';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
  activePathnames?: string[];
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  activePathnames,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href,
      ).pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      let newClassName = className;

      if (
        (activePathnames && activePathnames.includes(activePathname)) ||
        linkPathname === activePathname
      ) {
        newClassName = `${className} ${activeClassName}`.trim();
      }

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
    activePathnames,
  ]);

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
