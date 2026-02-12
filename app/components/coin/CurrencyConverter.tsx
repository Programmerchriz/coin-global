
"use client";

import { useState, useMemo } from 'react';

import Image from 'next/image';

import { ArrowUpDown } from 'lucide-react';

import { DropDown } from '../DropDownMenu';

const CurrencyConverter = ({
  symbol,
  image,
  currencies,
  currenciesObj,
}: CurrencyConverterProps) => {
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [fiatAmount, setFiatAmount] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const rate = currenciesObj[selectedCurrency];

  // Convert Crypto to Fiat
  const handleCryptoChange = (value: string) => {
    setCryptoAmount(value);
    const numeric = parseFloat(value);

    if (!isNaN(numeric)) {
      setFiatAmount((numeric * rate).toFixed(2).toString());
    } else {
      setFiatAmount('');
    }
  };

  // Convert Fiat to Crypto
  const handleFiatChange = (value: string) => {
    setFiatAmount(value);

    const numeric = parseFloat(value);
    if (!isNaN(numeric) && rate) {
      setCryptoAmount((numeric / rate).toFixed(10).toString());
    } else {
      setCryptoAmount('');
    }
  };

  return (
    <section className="bg-[#161b22] rounded-xl p-5 space-y-4">
      <h3 className="font-semibold">{symbol.toUpperCase()} Converter</h3>

      {/* Crypto Input */}
      <div className="bg-[#0f1419] rounded-lg px-4 py-3 flex justify-between items-center">
        <input
          type="number"
          placeholder="10"
          value={cryptoAmount}
          onChange={(e) => handleCryptoChange(e.target.value)}
          className="bg-transparent  text-white  outline-none  w-1/2 text-base appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        <div className="flex items-center gap-1">
          <div className="rounded-full flex items-center justify-center text-lg font-bold">
            <Image src={image} alt={` Logo`} width={24} height={24} />
          </div>
          <span className="text-sm text-gray-400">{symbol.toUpperCase()}</span>
        </div>
      </div>

      <div className="flex justify-center text-green-400">
        <button>
          <ArrowUpDown />
        </button>
      </div>

      {/* Fiat Input */}
      <div className="bg-[#0f1419] rounded-lg px-4 py-3 flex justify-between items-center">
        <input
          type="number"
          placeholder="60,000"
          value={fiatAmount}
          onChange={(e) => handleFiatChange(e.target.value)}
          className="bg-transparent  text-white  outline-none  w-1/2 text-base"
        />
        <div>
          <DropDown
            list={currencies}
            value={selectedCurrency}
            onChange={setSelectedCurrency}
          />
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
