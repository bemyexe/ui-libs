import { ReactNode } from 'react';

import { cn } from '../../../helpers/classNames';

interface PageProps {
  children: ReactNode;
  className?: string;
  withHeader?: boolean;
}

export const Page = ({ children, className, withHeader }: PageProps) => {
  return (
    <section
      className={cn(withHeader ? 'h-[calc(100vh-80px)]' : 'h-lvh', className)}
    >
      {children}
    </section>
  );
};
