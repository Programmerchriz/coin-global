'use client';

import { useState } from 'react';
import DataTable from '@/components/all/DataTable';

const topGainers: Mover[] = [
  {
    id: '1',
    name: 'Beefy',
    symbol: 'BIFI',
    price: '$324.30',
    change: '+209.5%',
    positive: true,
  },
  {
    id: '2',
    name: 'Minidoge',
    symbol: 'MINIDOGE',
    price: '$0.00',
    change: '+79.4%',
    positive: true,
  },
  {
    id: '3',
    name: 'ZeroBase',
    symbol: 'ZBT',
    price: '$0.15',
    change: '+77.3%',
    positive: true,
  },
  {
    id: '4',
    name: 'Bullish Degen',
    symbol: 'BULLISH',
    price: '$0.03',
    change: '+44.0%',
    positive: true,
  },
];

const topLosers: Mover[] = [
  {
    id: '1',
    name: 'FlokiX',
    symbol: 'FLOKIX',
    price: '$0.42',
    change: '-18.3%',
    positive: false,
  },
  {
    id: '2',
    name: 'MetaGold',
    symbol: 'MGOLD',
    price: '$1.24',
    change: '-12.1%',
    positive: false,
  },
  {
    id: '3',
    name: 'NanoDog',
    symbol: 'NDOG',
    price: '$0.002',
    change: '-9.6%',
    positive: false,
  },
  {
    id: '4',
    name: 'LiteGem',
    symbol: 'LGEM',
    price: '$4.90',
    change: '-6.2%',
    positive: false,
  },
];

const TopMovers = () => {
  const [active, setActive] = useState<'gainers' | 'losers'>('gainers');

  const data = active === 'gainers' ? topGainers : topLosers;

  const columns: DataTableColumn<Mover>[] = [
    {
      header: '', // No visible header
      cell: (row) => (
        <div className="flex items-center justify-between bg-[#192028] px-4 py-3 rounded-lg hover:opacity-95 transition cursor-pointer">
          {/* Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1f2933] flex items-center justify-center text-xs font-bold">
              {row.symbol[0]}
            </div>

            <div>
              <p className="text-sm font-medium">{row.name}</p>
              <p className="text-xs text-gray-400">{row.symbol}</p>
            </div>
          </div>

          {/* Right */}
          <div className="text-right">
            <p className="text-sm font-medium">{row.price}</p>
            <p
              className={`text-xs font-semibold ${
                row.positive ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {row.change}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-6 my-8 ml-3">
        <button
          onClick={() => setActive('gainers')}
          className={`pb-1 text-sm font-medium transition hover:cursor-pointer ${
            active === 'gainers' ? 'text-white border-b-2 border-green-400' : 'text-gray-400'
          }`}
        >
          Top Gainers
        </button>

        <button
          onClick={() => setActive('losers')}
          className={`pb-1 text-sm font-medium transition hover:cursor-pointer ${
            active === 'losers' ? 'text-white border-b-2 border-red-400' : 'text-gray-400'
          }`}
        >
          Top Losers
        </button>
      </div>

      {/* DataTable rendered as list */}
      <DataTable
        data={data}
        columns={columns}
        rowKey={(row) => row.id}
        tableClassName="mt-2"
        headerClassName="hidden" // hide header
        bodyCellClassName="w-full p-0 py-2 border-0"
      />
    </div>
  );
};

export default TopMovers;
