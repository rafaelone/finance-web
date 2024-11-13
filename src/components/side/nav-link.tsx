'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

type NavLinkProps = ComponentProps<typeof Link>;

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname();

  const isCurrent = props.href.toString() === pathname;

  return (
    <li
      data-current={isCurrent}
      className="w-full rounded-full data-[current=true]:bg-gradient-to-r data-[current=true]:from-orange data-[current=true]:to-purple data-[current=true]:p-[1px]"
    >
      <Link
        data-current={isCurrent}
        className="z-10 flex h-12 w-full items-center justify-start gap-2 rounded-full px-4 font-firacode text-xs font-bold tracking-wider text-grey data-[current=true]:bg-dark-100 data-[current=true]:text-white"
        {...props}
      />
    </li>
  );
}
