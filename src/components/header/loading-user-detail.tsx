import { Skeleton } from '../skeleton';

export function LoadingUserDetail() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="h-7 w-[100px]" />
      <Skeleton className="h-7 w-[120px]" />
    </div>
  );
}
