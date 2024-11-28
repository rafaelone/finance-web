import { getTransactionRevenue } from '@/https/get-transaction-revenue';
import { formatMoney } from '@/utils/format-money';
import { TrendingUp } from 'lucide-react';

export async function Revenue() {
  const data = await getTransactionRevenue();
  return (
    <div className="flex h-[120px] w-full flex-col gap-4 rounded-xl border border-grey p-6">
      <div className="flex items-center gap-4">
        <div className="flex size-8 items-center justify-center rounded-md bg-dark-200">
          <TrendingUp className="size-6 text-green" />
        </div>
        <span className="font-firacode text-xs font-bold tracking-wider text-grey">
          revenues
        </span>
      </div>
      <span className="font-firacode text-xl font-semiBold text-white">
        {formatMoney(data?.revenue)}
      </span>
    </div>
  );
}
