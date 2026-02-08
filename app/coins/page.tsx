import Link from "next/link";
import { cn, formatCurrency, formatPercentage } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";
import { fetcher } from "@/lib/coingecko.actions";
import DataTable from "../components/DataTable";
import Image from "next/image";
import { AllCoinsFallback } from "./fallback";

// market_cap_rank, (image, name(symbol)), current_price, price_change_percentage_24h, market_cap

const columns: DataTableColumn<CoinMarketData>[] = [
  {
    header: 'Rank',
    cellClassName: 'rank-cell',
    cell: (coin) => `#${formatCurrency(coin.market_cap_rank, undefined, undefined, false).slice(0, -3)}`,
  },
  {
    header: 'Token',
    cellClassName: 'token-cell',
    cell: (coin) => {
      return (
        <Link
          href={`/coins/${coin.id}`}
          className="token-info"
        >
          <Image
            src={coin.image}
            alt={`${coin.name} Logo`}
            width={28}
            height={28}
          />
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
    cell: (coin) => `${formatCurrency(coin.current_price).slice(2)}`,
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
    cell: (coin) => `${formatCurrency(coin.market_cap).slice(2)}`,
  },
];

const Coins = async () => {
  let allCoins;
  
    try {
      // allCoins = await fetcher<CoinMarketData[]>('/coins/markets?vs_currency=usd');
      allCoins = await fetcher<CoinMarketData[]>('/coins/markets', {
        vs_currency: "usd",
        order: "market_cap_desc",
        // per_page: perPage,
        // page: currentPage,
        // sparkline: "false",
        // price_change_percentage: "24h",
      });
    } catch (error) {
      console.error("Error fetching categories:", error);
      return (<AllCoinsFallback />);
    }

  return (
    <div
      id='coins-page'
      className="custom-scrollbar"
    >
      <h4>All Coins</h4>
      <DataTable
        data={allCoins.slice(0, 20)}
        columns={columns}
        rowKey={(coin) => coin.id}
        tableClassName="coins-table mt-3"
        headerClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  )
}

export default Coins;
