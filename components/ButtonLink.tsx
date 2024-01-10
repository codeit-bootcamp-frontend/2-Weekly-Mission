import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import styles from '@/components/ButtonLink.module.scss';

interface ButtonLinkProps extends LinkProps {
  className?: string;
  href: string | LinkProps['href'];
  children: ReactNode;
}

export default function ButtonLink({
  className = '',
  children,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.ButtonLink} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
