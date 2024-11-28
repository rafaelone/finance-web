import { Anchor } from '../link';
import { TransactionList } from './transactions-list';

export async function Transactions() {
  return (
    <div className="h-[337px] w-full max-w-[365px] justify-between rounded-xl border border-grey md:max-w-full">
      <div className="flex items-center justify-between border-b border-grey px-5 py-6">
        <strong className="font-firacode text-xl font-semibold text-white">
          Transactions
        </strong>
        <Anchor href="transactions" prefetch>
          See more
        </Anchor>
      </div>
      <TransactionList />
    </div>
  );
}
