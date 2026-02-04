"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className='main-container inner'>
        <Link href="/">
          {/* <Image src="btc.jpg" alt="CoinGlobal Logo" width={60} height={40} /> */}
          <h3 className='text-lg font-semibold'>Coin Global</h3>
        </Link>

        <nav>
          <Link href="/" className={cn('nav-link', {
            'is-active': pathname === '/',
            'is-home': true,
          })}>Home</Link>

          <p>Search Modal</p>

          <Link href="/coins" className={cn('nav-link', {
            'is-active': pathname === '/coins',
            'is-home': true,
          })}>All coins</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
