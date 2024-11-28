import { api } from '.';

type GetTransactionRevenue = {
  revenue: number;
  error?: string;
};

export async function getTransactionRevenue(): Promise<GetTransactionRevenue> {
  const response = await api('transaction/revenue', {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return {
      revenue: data.revenue,
    };
  }

  return {
    revenue: 0,
  };
}
