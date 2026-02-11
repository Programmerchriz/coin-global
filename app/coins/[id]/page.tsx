
import Image from 'next/image';

import { ArrowUpDown } from 'lucide-react';

import { fetcher } from '@/lib/coingecko.actions';

import DataTable from '@/app/components/DataTable';
import CandlestickChart from '@/app/components/CandlestickChart';
import CurrencyConverter from '@/app/components/coin/CurrencyConverter';
import CoinDetailCard from '@/app/components/coin/CoinDetailCard';
import TopMovers from '@/app/components/coin/TopMovers';

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

const exchangeListingsData = [
  {
    id: '1',
    exchange: 'Gate',
    pair: 'BTC / USDT',
    price: '$87,427.00',
    lastTraded: '5 min',
  },
  {
    id: '2',
    exchange: 'KuCoin',
    pair: 'BTC / USDT',
    price: '$87,419.00',
    lastTraded: '6 min',
  },
  {
    id: '3',
    exchange: 'Binance',
    pair: 'BTC / USDT',
    price: '$87,442.00',
    lastTraded: '6 min',
  },
  {
    id: '4',
    exchange: 'Bitget',
    pair: 'BTC / USDT',
    price: '$87,404.00',
    lastTraded: '5 min',
  },
];

const exchangeListingsColumns: DataTableColumn<ExchangeListing>[] = [
  {
    header: 'Exchange',
    accessorKey: 'exchange',
    cell: (row) => (
      <span className="text-green-400 font-medium">
        {row.exchange}
      </span>
    ),
  },
  {
    header: 'Pair',
    accessorKey: 'pair',
    cell: (row) => <span className='font-medium'>{row.pair}</span>,
  },
  {
    header: 'Price',
    accessorKey: 'price',
    cell: (row) => <span className='font-medium'>{row.price}</span>,
  },
  {
    header: 'Last Traded',
    accessorKey: 'lastTraded',
    cell: (row) => row.lastTraded,
  },
];

// bg-[#0f1419]
const Coin = async ({ params }: CoinPageProps) => {
  const { id } = await params;
  if (!id) return <>Loading...</>;

  // let coin: CoinDetailsData;

  // try {
  //   coin = await fetcher<CoinDetailsData>(
  //     `/coins/${id}/`,
  //     // `/coins/ethereum/contract/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`,
  //   );
  // } catch (error) {
  //   console.error('Error fetching categories:', error);
  //   // return <CoinFallback />;
  //   return
  // }

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
                <Image src="/btc.jpg" alt={` Logo`} width={32} height={32} />
              </div>

              <h1 className="text-2xl font-semibold">
                {`${id.slice(0, 1).toUpperCase()}${id.slice(1)}`}
              </h1>

              <span className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-400">
                +0.8% (24h)
              </span>
            </div>

            <div className="text-4xl font-bold">$87,451.49</div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-[#161b22] rounded-lg p-4">
                <p className="text-sm text-gray-400">Today</p>
                <p className="text-green-400 font-semibold">0.8%</p>
                {/* {isTrendingUp ? (
                  <TrendingUp width={16} height={16} />
                ) : (
                  <TrendingDown width={16} height={16} />
                )} */}
              </div>

              <div className="bg-[#161b22] rounded-lg p-4">
                <p className="text-sm text-gray-400">30 Days</p>
                <p className="text-green-400 font-semibold">0.1%</p>
                {/* {isTrendingUp ? (
                  <TrendingUp width={16} height={16} />
                ) : (
                  <TrendingDown width={16} height={16} />
                )} */}
              </div>

              <div className="bg-[#161b22] rounded-lg p-4">
                <p className="text-sm text-gray-400">Price Change (24h)</p>
                <p className="text-green-400 font-semibold">$660.53</p>
                {/* {isTrendingUp ? (
                  <TrendingUp width={16} height={16} />
                ) : (
                  <TrendingDown width={16} height={16} />
                )} */}
              </div>
            </div>
          </div>

          {/* Right: BTC Converter */}
          <CurrencyConverter />
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
            <CoinDetailCard />
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
              data={exchangeListingsData}
              columns={exchangeListingsColumns}
              rowKey={(row) => row.id}
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
