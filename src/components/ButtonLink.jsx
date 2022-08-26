import React from 'react';
import Button from './ButtonNew';
import Link from './Link';

export default function ButtonLink({
  children,
  href,
  external = false,
  newTab = false,
  linkProps,
  ...rest
}) {
  return (
    <Link
      noUnderline
      href={href}
      external={external}
      newTab={newTab}
      {...linkProps}
    >
      <Button {...rest}>{children}</Button>
    </Link>
  );
}
