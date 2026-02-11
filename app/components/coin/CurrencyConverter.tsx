import Image from 'next/image';

import { ArrowUpDown } from 'lucide-react';

import { DropDown } from '../DropDownMenu';

const CurrencyConverter = () => {
  const currencies = ['usd', 'eur', 'gbp'];

  return (
    <section className="bg-[#161b22] rounded-xl p-5 space-y-4">
      <h3 className="font-semibold">BTC Converter</h3>

      <div className="bg-[#0f1419] rounded-lg px-4 py-3 flex justify-between items-center">
        <input
          type="number"
          placeholder="10"
          className="bg-transparent  text-white  outline-none  w-1/2 text-base appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <div className="flex items-center gap-1">
          <div className="rounded-full flex items-center justify-center text-lg font-bold">
            <Image src="/btc.jpg" alt={` Logo`} width={24} height={24} />
          </div>
          <span className="text-sm text-gray-400">BTC</span>
        </div>
      </div>

      <div className="flex justify-center text-green-400">
        <button className="hover:cursor-pointer">
          <ArrowUpDown />
        </button>
      </div>

      <div className="bg-[#0f1419] rounded-lg px-4 py-3 flex justify-between items-center">
        <input
          type="text"
          placeholder="0.00"
          className="bg-transparent  text-white  outline-none  w-1/2 text-base"
        />
        <div>
          <DropDown list={currencies} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
