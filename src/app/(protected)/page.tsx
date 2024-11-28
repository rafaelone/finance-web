import { Balance } from '@/components/home/balance';
import { Expenses } from '@/components/home/expenses';

import { Revenue } from '@/components/home/revenue';
import { TotalSpendedInCategories } from '@/components/home/total-spended-in-categories';
import { Transactions } from '@/components/home/transactions';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1240px]">
      <div className="flex gap-8 md:flex-col md:gap-0">
        <div className="w-full">
          <Balance />
          <div className="my-6 flex w-full gap-6 md:flex-col">
            <Revenue />
            <Expenses />
          </div>
        </div>
        <div className="h-[323px] w-full max-w-[365px] rounded-xl border border-grey md:mb-6 md:w-full md:max-w-full" />
      </div>
      <div className="flex gap-8 md:flex-col md:gap-6">
        <TotalSpendedInCategories />
        <Transactions />
      </div>
    </main>
  );
}
