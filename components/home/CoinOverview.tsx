import { fetcher } from '@/lib/coingecko.actions';
import { formatCurrency } from '@/lib/utils';
import Image from 'next/image';
import { CoinOverviewFallback } from '@/app/components/home/fallback';
import CandlestickChart from '@/app/components/CandlestickChart';

const CoinOverview = async () => {
  try {
    const [coin, coinOHLCData] = await Promise.all([
      await fetcher<CoinDetailsData>('/coins/bitcoin', {
        localization: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
        // default_pair_format: "symbol",
      }),

      await fetcher<OHLCData[]>('/coins/bitcoin/ohlc', {
        vs_currency: 'usd',
        days: 1,
        // interval: 'hourly',
        // precision: 'full',
      }),
    ]);

    return (
      <div id="coin-overview">
        <CandlestickChart
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
        </CandlestickChart>
      </div>
    );
  } catch (error) {
    console.log('Error fetching coin overview:', error);
    return <CoinOverviewFallback />;
  }

  return;
};

export default CoinOverview;
