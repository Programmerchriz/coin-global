
import Link from "next/link";
import Image from "next/image";
import { cn, formatCurrency, formatPercentage } from "@/lib/utils";
import { TrendingUp, TrendingDown, ChevronRightIcon } from "lucide-react";

export const columns: DataTableColumn<Category>[] = [
  {
    header: 'Category',
    cellClassName: 'category-cell',
    cell: (category) => {
      return (
        // <Link href={`/coins/categories/${category.id}`}>
        //     <p>{category.name}</p>
        // </Link>
        <div>
          <p>{category.name}</p>
        </div>
      );
    },
  },
  {
    header: 'Top Gainers',
    cellClassName: 'top-gainers-cell',
    cell: (category) => category.top_3_coins.map((img) => (
      <Image
        key={img}
        src={img}
        alt=""
        width={28}
        height={28}
      />))
  },
  {
    header: '24h Change',
    cellClassName: 'change-header-cell',
    cell: (category) => {
      const isTrendingUp = category.market_cap_change_24h > 0;
      
      return (
        <div className={cn('change-cell', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          <p className="flex items-center gap-1">
            {formatPercentage(category.market_cap_change_24h)}
            {isTrendingUp ? (
              <TrendingUp width={16} height={16} />
            ) : (
              <TrendingDown width={16} height={16} />
            )}
          </p>
        </div>
      );
    },
  },
  {
    header: 'Market Cap',
    cellClassName: 'market-cap-cell',
    cell: (category) => `${formatCurrency(category.market_cap)}`,
  },
  {
    header: 'Volume 24h',
    cellClassName: 'volume-cell',
    cell: (category) => `${formatCurrency(category.volume_24h)}`,
  },
];
