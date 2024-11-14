import { Suspense } from 'react';
import { UserDetail } from './user-detail';
import { LoadingUserDetail } from './loading-user-detail';

export function Header() {
  return (
    <header className="flex h-[100px] w-full items-center border-b border-grey px-10">
      <div>
        <Suspense fallback={<LoadingUserDetail />}>
          <UserDetail />
        </Suspense>
      </div>
    </header>
  );
}
