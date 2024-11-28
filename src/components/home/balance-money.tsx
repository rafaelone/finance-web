'use client';
import { getTransactionBalance } from '@/https/get-transaction-balance';
import { useQuery } from '@tanstack/react-query';
import { Eye, EyeClosed } from 'lucide-react';
import { useState } from 'react';
import { Skeleton } from '../skeleton';
import { formatMoney } from '@/utils/format-money';

export function BalanceMoney() {
  const [hiddenMoney, setHiddenMoney] = useState<boolean>(true);

  const { data, isLoading } = useQuery<{ balance: number }>({
    queryKey: ['get-balance-money'],
    queryFn: async () => {
      const response = await getTransactionBalance();
      return { balance: response.balance };
    },
  });

  function handleShowMoney() {
    setHiddenMoney(!hiddenMoney);
  }

  return (
    <div className="flex items-center gap-2">
      {isLoading ? (
        <Skeleton className="h-7 w-[108px]" />
      ) : (
        <span className="font-firacode text-xl font-semiBold text-white">
          {hiddenMoney ? 'R$ ******' : formatMoney(data?.balance ?? 0)}
        </span>
      )}
      <button onClick={handleShowMoney}>
        {hiddenMoney ? (
          <EyeClosed className="size-6 text-white" />
        ) : (
          <Eye className="size-6 text-white" />
        )}
      </button>
    </div>
  );
}
