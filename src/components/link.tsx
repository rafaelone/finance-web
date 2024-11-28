'use client';
import Link from 'next/link';

import type { ComponentProps } from 'react';

type AnchorProps = ComponentProps<typeof Link>;

export function Anchor(props: AnchorProps) {
  return (
    <div className="rounded-full bg-gradient-to-r from-orange to-purple p-[1px]">
      <Link
        className="z-10 flex h-6 w-full items-center justify-start gap-2 rounded-full bg-dark-100 px-4 font-firacode text-xs font-bold tracking-wider text-white md:flex-col md:items-center md:justify-center md:gap-1"
        {...props}
      />
    </div>
  );
}
