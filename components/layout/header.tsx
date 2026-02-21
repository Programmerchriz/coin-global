
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { SearchModal } from '@/components/all/SearchModal';

const Header = ({ trendingCoins }: HeaderProps) => {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      href: "/",
      disabled: false,
    },
    {
      title: "Coins",
      href: "/coins",
      disabled: false,
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      disabled: false,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/coin-glob.png"
            alt="CoinGlobal Logo"
            width={40}
            height={40}
            className="mt-2 rounded-md"
          />
          <h3 className="text-lg font-semibold tracking-tight">
            Coin<span className="font-bold italic text-indigo-500">Global</span>
          </h3>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              aria-disabled={link.disabled}
              className={cn(
                "transition-colors hover:text-indigo-400",
                pathname === link.href
                  ? "text-indigo-500 font-medium"
                  : "text-white/70"
              )}
            >
              {link.title}
            </Link>
          ))}

          {/* Search */}
          <div className="hidden md:block">
            <SearchModal initialTrendingCoins={trendingCoins} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
