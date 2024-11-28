import { api } from '.';

type transactions = {
  id: string;
  name: string;
  type: string;
  value: number;
  createdAt: string;
};

type GetTransactions = {
  transactions: transactions[];
  error?: string;
};

export async function getTransactions(
  limit: number,
  offset: number
): Promise<GetTransactions> {
  const response = await api(`transaction?limit=${limit}&offset=${offset}`, {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return {
      transactions: data,
    };
  }

  return {
    transactions: [],
  };
}
