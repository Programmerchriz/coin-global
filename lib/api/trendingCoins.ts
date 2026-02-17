
import { fetcher } from "@/lib/coingecko.actions";

export async function getTrendingCoins() {
  return (
    fetcher<{ coins: TrendingCoin[] }>(
      '/search/trending',
      undefined,
      300
    )
  );
};
