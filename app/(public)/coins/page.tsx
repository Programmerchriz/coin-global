import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, TrendingDown } from 'lucide-react';

import { cn, formatCurrency, formatPercentage } from '@/lib/utils';
import { fetcher } from '@/lib/coingecko.actions';
import DataTable from '../../../components/all/DataTable';
import CoinsPagination from '../../../components/all/CoinsPagination';
import { AllCoinsFallback } from './fallback';

const columns: DataTableColumn<CoinMarketData>[] = [
  {
    header: 'Rank',
    cellClassName: 'rank-cell',
    cell: (coin) => `#${coin.market_cap_rank}`,
  },
  {
    header: 'Token',
    cellClassName: 'token-cell',
    cell: (coin) => {
      return (
        <Link href={`/coins/${coin.id}`} className="token-info">
          <Image src={coin.image} alt={`${coin.name} Logo`} width={28} height={28} />
          <p>
            {coin.name} ({coin.symbol.toUpperCase()})
          </p>
        </Link>
      );
    },
  },
  {
    header: 'Price',
    cellClassName: 'price-cell',
    cell: (coin) =>
      `${formatCurrency(coin.current_price)}`.toLowerCase().startsWith('us')
        ? `${formatCurrency(coin.current_price)}`
        : `${formatCurrency(coin.current_price)}`,
  },
  {
    header: '24h Change',
    cellClassName: 'change-header-cell',
    cell: (coin) => {
      const isTrendingUp = coin.price_change_percentage_24h > 0;

      return (
        <div className={cn('change-cell', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
          <p className="flex items-center gap-1">
            {formatPercentage(coin.price_change_percentage_24h)}
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
    cell: (coin) =>
      `${formatCurrency(coin.market_cap)}`.toLowerCase().startsWith('us')
        ? `${formatCurrency(coin.market_cap)}`
        : `${formatCurrency(coin.market_cap)}`,
  },
];

const Coins = async ({ searchParams }: NextPageProps) => {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage: number = 10;

  let allCoins: CoinMarketData[];

  try {
    // allCoins = await fetcher<CoinMarketData[]>('/coins/markets?vs_currency=usd');
    allCoins = await fetcher<CoinMarketData[]>('/coins/markets', {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: perPage,
      page: currentPage,
      // sparkline: "false",
      price_change_percentage: '24h',
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return <AllCoinsFallback />;
  }

  const hasMorePages = allCoins.length === perPage;
  const estimatedTotalPages = currentPage >= 100 ? Math.ceil(currentPage / 100) * 100 + 100 : 100;

  return (
    <div id="coins-page" className="custom-scrollbar">
      <h4>All Coins</h4>
      <DataTable
        data={allCoins}
        columns={columns}
        rowKey={(row) => row.id}
        tableClassName="coins-table"
        headerClassName="py-3!"
        bodyCellClassName="py-2!"
      />

      <CoinsPagination
        currentPage={currentPage}
        totalPages={estimatedTotalPages}
        hasMorePages={hasMorePages}
        basePath="coins"
      />
    </div>
  );
};

export default Coins;
