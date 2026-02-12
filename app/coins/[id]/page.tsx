
import Image from 'next/image';

import { ArrowUpDown, TrendingDown, TrendingUp } from 'lucide-react';

import { fetcher } from '@/lib/coingecko.actions';

import DataTable from '@/app/components/DataTable';
import CandlestickChart from '@/app/components/CandlestickChart';
import CurrencyConverter from '@/app/components/coin/CurrencyConverter';
import CoinDetailCard from '@/app/components/coin/CoinDetailCard';
import TopMovers from '@/app/components/coin/TopMovers';
import { cn, formatCurrency, formatPercentage, formatUsd, trendingClasses } from '@/lib/utils';

const recentTradesData = [
  {
    id: '1',
    price: '$87,490.13',
    amount: '0.0457',
    value: '$4,000.75',
    type: 'Buy',
    time: '7 min',
  },
  {
    id: '2',
    price: '$87,475.44',
    amount: '0.0572',
    value: '$5,000.11',
    type: 'Buy',
    time: '7 min',
  },
  {
    id: '3',
    price: '$87,470.06',
    amount: '0.0000',
    value: '$4.35',
    type: 'Sell',
    time: '10 min',
  },
  {
    id: '4',
    price: '$87,472.46',
    amount: '0.0001',
    value: '$5.25',
    type: 'Buy',
    time: '10 min',
  },
];

const recentTradesColumns: DataTableColumn<RecentTrade>[] = [
  {
    header: 'Price',
    accessorKey: 'price',
    cell: (row) => <span className='font-medium'>{row.price}</span>,
  },
  {
    header: 'Amount',
    accessorKey: 'amount',
    cell: (row) => <span className='font-medium'>{row.amount}</span>,
  },
  {
    header: 'Value',
    accessorKey: 'value',
    cell: (row) => <span className='font-medium'>{row.value}</span>,
  },
  {
    header: 'Buy/Sell',
    accessorKey: 'type',
    cell: (row) => (
      <b
        className={
          row.type === 'Buy'
            ? 'text-green-400'
            : 'text-red-400'
        }
      >
        {row.type}
      </b>
    ),
  },
  {
    header: 'Time',
    accessorKey: 'time',
    cell: (row) => row.time,
  },
];

const exchangeListingsColumns: DataTableColumn<Ticker>[] = [
  {
    header: 'Exchange',
    accessorKey: 'exchange',
    cell: (row) => (
      <span className="text-green-400 font-medium">
        {row.market.name}
      </span>
    ),
  },
  {
    header: 'Pair',
    accessorKey: 'pair',
    cell: (row) => <span className='font-medium'>{row.base} / {row.target}</span>,
  },
  {
    header: 'Price',
    accessorKey: 'price',
    cell: (row) => <span className='font-medium'>{row.last}</span>,
  },
  {
    header: 'Last Traded',
    accessorKey: 'lastTraded',
    cell: (row) => row.timestamp,
  },
];

// bg-[#0f1419]
const Coin = async ({ params }: CoinPageProps) => {
  const { id } = await params;
  if (!id) return <>Loading...</>;

  const isTrendingUp = (value: number) => value > 0;

  let coin: CoinDetailsData;

  try {
    coin = await fetcher<CoinDetailsData>(
      `/coins/${id}/`,
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
    // return <CoinFallback />;
    return
  }

  const currencies = [ ... new Set([
    "usd", "eur", "gbp", "cad", "aud", "nzd", "jpy", "ngn",
    ...Object.keys(coin.market_data.current_price)
  ]) ];

  const currenciesObj = coin.market_data.current_price;

  const coinDetailsArray: CoinDetailsArrayProps[] = [
    {
      title: 'Market Cap',
      isLink: false,
      value: `${formatCurrency(coin.market_data.market_cap.usd).slice(2)}`,
    },
    {
      title: 'Market Cap Rank',
      isLink: false,
      value: `#${coin.market_cap_rank}`,
    },
    {
      title: 'Total Volume',
      isLink: false,
      value: `${formatCurrency(coin.market_data.total_volume.usd).slice(2)}`,
    },
    {
      title: 'Website',
      isLink: true,
      href: coin.links.homepage[0],
    },
    {
      title: 'Whitepaper',
      isLink: true,
      href: coin.links.whitepaper,
    },
    {
      title: 'Community',
      isLink: true,
      href: coin.links.official_forum_url,
    },
  ];

const coinTickers: Ticker[] = coin.tickers;

  return (
    <section className="min-h-screen text-white px-4 py-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Coin Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                <Image src={coin.image.large} alt={` Logo`} width={32} height={32} />
              </div>

              <h1 className="text-2xl font-semibold">
                {`${id.slice(0, 1).toUpperCase()}${id.slice(1)}`}
              </h1>

              <span
                className={cn("px-2 py-1 text-xs rounded-lg bg-green-500/10 text-green-400 flex gap-1", trendingClasses(coin.market_data.price_change_percentage_24h).textClass)}
              >
                {formatPercentage(coin.market_data.price_change_percentage_24h)}
                {isTrendingUp(coin.market_data.price_change_percentage_24h) ? (
                  <TrendingUp
                    width={16}
                    height={16}
                    className={cn(
                      trendingClasses(coin.market_data.price_change_percentage_24h).textClass,
                    )}
                  />
                ) : (
                  <TrendingDown
                    width={16}
                    height={16}
                    className={cn(
                      trendingClasses(coin.market_data.price_change_percentage_24h).textClass,
                    )}
                  />
                )} (24h)
              </span>
            </div>

            <div className="text-4xl font-bold">
              {`${formatCurrency(coin.market_data.current_price.usd)}`.toLowerCase().startsWith("us") ? `${formatCurrency(coin.market_data.current_price.usd)}`.slice(2) : `${formatCurrency(coin.market_data.current_price.usd)}`}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mt-4 items-center">
              <div className="rounded-lg p-4">
                <p className="text-sm text-gray-400">Today</p>
                <div className='flex gap-1 items-center'>
                  <p
                    className={cn("text-green-400 font-semibold", trendingClasses(coin.market_data.price_change_percentage_24h).textClass)}
                  >
                    {formatPercentage(coin.market_data.price_change_percentage_24h)}
                  </p>
                  {isTrendingUp(coin.market_data.price_change_percentage_24h) ? (
                    <TrendingUp
                      width={16}
                      height={16}
                      className={cn(
                        trendingClasses(coin.market_data.price_change_percentage_24h).textClass,
                      )}
                    />
                  ) : (
                    <TrendingDown
                      width={16}
                      height={16}
                      className={cn(
                        trendingClasses(coin.market_data.price_change_percentage_24h).textClass,
                      )}
                    />
                  )}
                </div>
              </div>

              <div className="rounded-lg p-4">
                <p className="text-sm text-gray-400">30 Days</p>
                <div className='flex gap-1 items-center'>
                  <p
                    className={cn("text-green-400 font-semibold", trendingClasses(coin.market_data.price_change_percentage_30d).textClass)}
                  >
                    {formatPercentage(coin.market_data.price_change_percentage_30d)}
                  </p>
                  {isTrendingUp(coin.market_data.price_change_percentage_30d) ? (
                    <TrendingUp
                      width={16}
                      height={16}
                      className={cn(
                        trendingClasses(coin.market_data.price_change_percentage_30d).textClass,
                      )}
                    />
                  ) : (
                    <TrendingDown
                      width={16}
                      height={16}
                      className={cn(
                        trendingClasses(coin.market_data.price_change_percentage_30d).textClass,
                      )}
                    />
                  )}
                </div>
              </div>

              <div className="rounded-lg p-4">
                <p className="text-sm text-gray-400">Price Change (24h)</p>
                <p
                  className={cn("text-green-400 font-semibold", trendingClasses(coin.market_data.price_change_24h_in_currency.usd).textClass)}
                >
                  {formatUsd(coin.market_data.price_change_24h_in_currency.usd.toString())}
                </p>
              </div>
            </div>
          </div>

          {/* Right: BTC Converter */}
          <CurrencyConverter
            symbol={coin.symbol}
            image={coin.image.large}
            currencies={currencies}
            currenciesObj={currenciesObj}
          />
        </div>

        {/* Chart + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 bg-[#161b22] rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Trend Overview</h3>

              <div className="flex gap-2 text-xs">
                {['1D', '1W', '1M', '3M', '6M', '1Y'].map((item) => (
                  <span
                    key={item}
                    className={`px-2 py-1 rounded ${
                      item === '1D' ? 'bg-green-500 text-black' : 'bg-[#0f1419] text-gray-400'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            {/* <CandlestickChart
              data={coinOHLCData}
              coinId="bitcoin"
            >
              <div
                className="header pt-2"
              >
                <Image
                  src={coin.image.large}
                  alt={coin.name}
                  width={56}
                  height={56}
                />
                <div
                  className="info"
                >
                  <p>
                    {coin.name} / {coin.symbol.toUpperCase()}
                  </p>
                  <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                </div>
              </div>
            </CandlestickChart> */}
          </div>

          {/* Coin Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Coin Details</h3>
            <CoinDetailCard
              coinDetailsArray={coinDetailsArray}
            />
          </div>
        </div>

        {/* Recent Trades */}
        <div
          id="coins-page"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 px-0 pr-0 custom-scrollbar"
        >
          {/* Recent Trades - 2/3 */}
          <div className="lg:col-span-2 custom-scrollbar">
            <h4 className="text-xl md:text-3xl font-semibold mb-2">
              Recent Trades
            </h4>

            <DataTable
              data={recentTradesData}
              columns={recentTradesColumns}
              rowKey={(row) => row.id}
              tableClassName="coins-table mt-3"
              headerClassName="py-3!"
              bodyCellClassName="py-7!"
            />
          </div>

          {/* Top Movers - 1/3 */}
          <div className="lg:col-span-1">
            <TopMovers />
          </div>
        </div>

        {/* Exchange Listings */}
        <div
          id='coins-page'
          className="custom-scrollbar py-3 grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6 px-0 custom-scrollbar"
        >
          <div className="lg:col-span-2 custom-scrollbar">
            <h4 className='text-xl md:text-2xl font-semibold mb-2'>Exchange Listings</h4>
            <DataTable
              data={coinTickers}
              columns={exchangeListingsColumns}
              rowKey={(row) => `${row.market.identifier}-${row.base}-${row.target}-${row.last_traded_at}`}
              tableClassName="coins-table mt-3"
              headerClassName="py-3!"
              bodyCellClassName="px-0 py-7!"
            />
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </div>
    </section>
  );
};
export default Coin;
