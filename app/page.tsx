import { Suspense } from 'react';

import {
  CategoriesFallback,
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from '@/app/components/home/fallback';
import Categories from '@/app/components/home/Categories';

import CoinOverview from '@/components/home/CoinOverview';
import TrendingCoins from '@/components/home/TrendingCoins';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRightIcon } from 'lucide-react';

const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense
          fallback={<CoinOverviewFallback />}
        >
          <CoinOverview />
        </Suspense>
        <Suspense
          fallback={<TrendingCoinsFallback />}
        >
          <TrendingCoins />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <Suspense
          fallback={<CategoriesFallback />}
        >
          <Categories />
          <div className='flex justify-end items-start'>
            <Link
              href="/categories"
              className={cn("gap-1 px-2.5")}
            >
              <div className="flex">
                <p>Full Categories Page</p>
                <ChevronRightIcon />
              </div>
            </Link>
          </div>
        </Suspense>
      </section>
    </main>
  );
};

export default Page;
