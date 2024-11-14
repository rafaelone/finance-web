import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-testid="skeleton"
      className={twMerge('animate-pulse rounded-md bg-gray-400/50', className)}
      {...props}
    />
  );
}
