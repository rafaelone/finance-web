import { api } from '.';

type spended = {
  totalMoney: number;
  categories: {
    percentage: number;
    name: string;
    totalWithdraw: number;
  }[];
};

type GetTotalSpendedInCategoriesResponse = {
  spended: spended;
  error?: string;
};

export async function getTotalSpendedInCategories(): Promise<GetTotalSpendedInCategoriesResponse> {
  const response = await api(`category/total-spended`, {
    method: 'GET',
  });

  if (response.ok) {
    const data = await response.json();

    return {
      spended: data,
    };
  }

  return {
    spended: {
      categories: [],
      totalMoney: 0,
    },
  };
}
