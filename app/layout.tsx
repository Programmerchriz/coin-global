import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { fetcher } from '@/lib/coingecko.actions';

import './globals.css';
import Header from '../components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coin Global',
  description: 'Crypto Screener App with a built-in High-Frequency Terminal & Dashboard',
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const trending = await fetcher<{ coins: TrendingCoin[] }>('/search/trending');

  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header trendingCoins={trending.coins} />
        {children}
      </body>
    </html>
  );
}
