import { ArrowRightLeft, LogOut, Shapes, TableOfContents } from 'lucide-react';
import { NavLink } from './side/nav-link';

export function Footer() {
  return (
    <footer className="mt-auto hidden w-full items-center justify-start border-0 border-r border-grey bg-dark-200 px-4 py-3 md:flex">
      <div>
        <nav className="w-full">
          <ul className="flex w-full flex-row gap-8">
            <NavLink href="/" prefetch>
              <TableOfContents className="size-4" />
              Overview
            </NavLink>

            <NavLink href="/transactions" prefetch>
              <ArrowRightLeft className="size-5" />
              Transactions
            </NavLink>

            <NavLink href="/categories" prefetch>
              <Shapes className="size-5" />
              Categories
            </NavLink>
          </ul>
        </nav>
      </div>
      <a
        href="/api/auth/sign-out"
        className="mt-auto flex h-[53px] w-full items-center justify-center gap-2 border-t border-white font-firacode text-xl font-bold text-white md:hidden"
      >
        Exit
        <LogOut className="size-5" />
      </a>
    </footer>
  );
}
