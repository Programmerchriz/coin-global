
import Link from "next/link";

import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { getTrendingCoins } from "@/lib/api/trendingCoins";

import TrendingCoinsTable from "@/app/components/trending-coins/TrendingCoinsTable";

const TrendingCoins = async () => {
  const trendingCoins = await getTrendingCoins();

  return (
    <div id="trending-coins" className="custom-scrollbar">
      <h4>Trending Coins</h4>
      <TrendingCoinsTable trendingCoins={trendingCoins.coins.slice(0, 5)} />
      <div className='flex justify-center items-center'>
        <Link
          href="/trending-coins"
          className={cn("text-white font-medium rounded-lg hover:opacity-90 active:opacity-80")}
        >
          <div className="flex">
            <p>More</p>
            <ChevronRightIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrendingCoins;
