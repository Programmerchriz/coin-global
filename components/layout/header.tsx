
import { getServerSession } from '@/lib/session';
import { getTrendingCoins } from '@/lib/api/trendingCoins';

import HeaderClient from "./HeaderClient";

export default async function Header() {
  let session;
  
  try {
    session = await getServerSession();
  } catch (e) {
    console.error("Error:", e);
  };

  if (session) {
    const trending = await getTrendingCoins();
    return (
      <HeaderClient trendingCoins={trending?.coins} session={session} />
    );
  }

  return (
    <HeaderClient trendingCoins={[]} session={session} />
  );
};
