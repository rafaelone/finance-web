import { api } from '.';

type GetTransactionExpenses = {
  expense: number;
  error?: string;
};

export async function getTransactionExpenses(): Promise<GetTransactionExpenses> {
  const response = await api('transaction/expense', {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return {
      expense: data.expense,
    };
  }

  return {
    expense: 0,
  };
}
