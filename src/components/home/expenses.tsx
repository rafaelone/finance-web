import { getTransactionExpenses } from '@/https/get-transaction-expense';
import { formatMoney } from '@/utils/format-money';

import { TrendingDown } from 'lucide-react';

export async function Expenses() {
  const data = await getTransactionExpenses();
  return (
    <div className="flex h-[120px] w-full flex-col gap-4 rounded-xl border border-grey p-6">
      <div className="flex items-center gap-4">
        <div className="flex size-8 items-center justify-center rounded-md bg-dark-200">
          <TrendingDown className="size-6 text-red-100" />
        </div>
        <span className="font-firacode text-xs font-bold tracking-wider text-grey">
          expenses
        </span>
      </div>
      <span className="font-firacode text-xl font-semiBold text-white">
        {formatMoney(data?.expense)}
      </span>
    </div>
  );
}
