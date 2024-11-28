import { getTransactions } from '@/https/get-transactions';
import { formatMoney } from '@/utils/format-money';
import { tv } from 'tailwind-variants';

const moneyVariants = tv({
  base: 'font-firacode text-base font-semibold',
  variants: {
    variant: {
      WITHDRAW: 'text-red-100',
      DEPOSIT: 'text-green',
    },
  },
  defaultVariants: {
    variant: 'DEPOSIT',
  },
});

export async function TransactionList() {
  const data = await getTransactions(3, 0);

  if (!data) return null;

  return (
    <ul className="mt-4 flex flex-col gap-4 px-5">
      {data.transactions.map((transaction) => (
        <li
          className="flex items-center justify-between border-b border-grey pb-2"
          key={transaction.id}
        >
          <div className="flex flex-col gap-1">
            <strong className="font-firacode text-base font-semibold text-white">
              {transaction.name}
            </strong>
            <span className="font-firacode text-xs font-semibold text-grey">
              {transaction.createdAt}
            </span>
          </div>
          <strong
            className={moneyVariants({
              variant: transaction.type === 'DEPOSIT' ? 'DEPOSIT' : 'WITHDRAW',
            })}
          >
            {transaction.type === 'DEPOSIT' ? '+ ' : '- '}
            {formatMoney(transaction.value)}
          </strong>
        </li>
      ))}
    </ul>
  );
}
