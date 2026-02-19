'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { SearchModal } from '@/components/all/SearchModal';

const Header = ({
  trendingCoins,
}: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header>
      <div className="main-container px-2 py-0 inner">
        <Link href="/">
          <div className="flex items-center">
            <div className='mt-2'>
              <Image src="/coin-glob.png" alt="CoinGlobal Logo" width={60} height={60} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Coin<span className="font-bold italic">Global</span>
              </h3>
            </div>
          </div>
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
