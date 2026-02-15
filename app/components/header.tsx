'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { SearchModal } from '@/app/components/SearchModal';

const Header = ({
  trendingCoins,
}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          {/* <Image src="btc.jpg" alt="CoinGlobal Logo" width={60} height={40} /> */}
          <h3 className="text-lg font-semibold">
            Coin<span className="font-bold italic">Global</span>
          </h3>
        </Link>

        <nav>
          <Link
            href="/"
            className={cn('nav-link', {
              'is-active': pathname === '/',
              'is-home': true,
            })}
          >
            Home
          </Link>

          <SearchModal initialTrendingCoins={trendingCoins} />

          <Link
            href="/coins"
            className={cn('nav-link', {
              'is-active': pathname === '/coins',
            })}
          >
            All coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
