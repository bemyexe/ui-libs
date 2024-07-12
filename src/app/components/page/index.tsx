import { ReactNode } from 'react';

import { cn } from '../../../helpers/classNames';

interface PageProps {
  children: ReactNode;
  className?: string;
}

export const Page = ({ children, className }: PageProps) => {
  return (
    <section className={cn('min-h-screen', className)}>{children}</section>
  );
};
