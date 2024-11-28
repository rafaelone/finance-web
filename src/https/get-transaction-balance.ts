import { api } from '.';

type GetTransactionBalance = {
  balance: number;
  error?: string;
};

export async function getTransactionBalance(): Promise<GetTransactionBalance> {
  const response = await api('transaction/balance', {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return {
      balance: data.balance,
    };
  }

  return {
    balance: 0,
  };
}
