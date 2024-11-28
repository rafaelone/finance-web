import { CreditCard } from 'lucide-react';
import { BalanceMoney } from './balance-money';

export function Balance() {
  return (
    <div className="h-[180px] w-full rounded-xl border border-grey p-7">
      <div className="mb-10 flex items-center gap-2">
        <CreditCard className="size-6 text-grey" />
        <span className="font-firacode text-base font-semibold tracking-[1px] text-grey">
          balance
        </span>
      </div>
      <BalanceMoney />
    </div>
  );
}
