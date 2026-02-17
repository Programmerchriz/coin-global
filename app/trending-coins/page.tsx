
import { getTrendingCoins } from "@/lib/api/trendingCoins";

import TrendingCoinsTable from "@/app/components/trending-coins/TrendingCoinsTable";
import CoinsPagination from "@/app/components/CoinsPagination";

export default async function TrendingCoinsPage({ searchParams }: NextPageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const perPage: number = 8;

  const trendingCoins = await getTrendingCoins();

  const totalPages = Math.ceil(trendingCoins.coins.length / perPage);

  const paginatedTrendingCoins = trendingCoins.coins.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const hasMorePages = currentPage < totalPages;

  return (
    <div className="main-container">
      <h4 className="text-xl md:text-2xl font-semibold mb-2 pl-5">
        Trending Coins
      </h4>

      <div id="trending-coins" className="custom-scrollbar">
        <TrendingCoinsTable trendingCoins={paginatedTrendingCoins} />
      </div>

      <CoinsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        hasMorePages={hasMorePages}
        basePath="trending-coins"
      />
    </div>
  );
};
