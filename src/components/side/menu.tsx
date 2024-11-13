import { ArrowRightLeft, LogOut, Shapes, TableOfContents } from 'lucide-react';
import { NavLink } from './nav-link';

export function Menu() {
  return (
    <aside className="flex w-[200px] flex-col items-center justify-start border-r border-grey bg-dark-200 pt-12">
      <div>
        <h1 className="mb-24 w-full px-4 font-firacode text-2xl font-bold tracking-wider text-white">
          Finances
        </h1>
        <nav className="w-full">
          <ul className="flex w-full flex-col gap-8">
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
      <button className="mt-auto flex h-[53px] w-full items-center justify-center gap-2 border-t border-white font-firacode text-xl font-bold text-white">
        Exit
        <LogOut className="size-5" />
      </button>
    </aside>
  );
}
