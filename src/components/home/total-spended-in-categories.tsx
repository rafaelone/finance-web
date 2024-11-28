import { getTotalSpendedInCategories } from '@/https/get-total-spended-in-categories';
import { formatMoney } from '@/utils/format-money';

export async function TotalSpendedInCategories() {
  const data = await getTotalSpendedInCategories();

  return (
    <div className="h-[337px] w-full rounded-xl border border-grey">
      <div className="flex h-[71] items-center justify-between border-b border-grey px-6">
        <strong className="font-firacode text-xl font-semibold text-white">
          Spending by category
        </strong>
        <span className="font-firacode text-base font-semibold text-white">
          {formatMoney(data.spended.totalMoney)}
        </span>
      </div>
      <ul className="gap-5 px-10 py-6">
        {data.spended.categories.map((category) => (
          <li key={category.name} className="flex flex-col gap-1">
            <strong className="font-firacode text-xs font-bold text-white">
              {category.name}
            </strong>
            <div className="flex h-[10px] w-full items-center rounded-full bg-gradient-to-r from-orange to-purple px-0.5">
              <div className="flex h-2 w-full items-center rounded-full bg-dark-200">
                <div className="h-2 w-[60%] rounded-full bg-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-firacode text-xs font-bold text-grey">
                {formatMoney(category.totalWithdraw)}
              </span>
              <span className="font-firacode text-xs font-bold text-grey">
                {category.percentage}%
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
