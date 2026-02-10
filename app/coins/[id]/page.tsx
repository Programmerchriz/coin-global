import BackButton from "@/app/components/BackButton";
import CurrencyConverter from "@/app/components/CurrencyConverter";
import { DropDown } from "@/app/components/DropDownMenu";
import { fetcher } from "@/lib/coingecko.actions";
import { ArrowUpDown } from "lucide-react";
import Image from "next/image";

// bg-[#0f1419]
const Coin = async ({
  params,
}: CoinPageProps) => {
  const { id } = await params;
  if (!id) return (<>Loading...</>);

  // let coin: CoinDetailsData;
  
    // try {
    //   coin = await fetcher<CoinDetailsData>(
    //     `/coins/${id}/`,
    //     // `/coins/ethereum/contract/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48`,
    //   );
    // } catch (error) {
    //   console.error('Error fetching categories:', error);
    //   // return <CoinFallback />;
    //   return
    // }

  return (
    <section className="min-h-screen text-white px-4 py-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Coin Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
                <Image src="/btc.jpg" alt={` Logo`} width={32} height={32} />
              </div>

              <h1 className="text-2xl font-semibold">
                {`${id.slice(0, 1).toUpperCase()}${id.slice(1)}`}
              </h1>

              <span className="px-2 py-1 text-xs rounded bg-green-500/10 text-green-400">
                +0.8% (24h)
              </span>
            </div>

            <div className="text-4xl font-bold">
              $87,451.49
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-[#161b22] rounded-lg p-4">
                <p className="text-sm text-gray-400">Today</p>
                <p className="text-green-400 font-semibold">0.8%</p>
              </div>

              <div className="bg-[#161b22] rounded-lg p-4">
                <p className="text-sm text-gray-400">30 Days</p>
                <p className="text-green-400 font-semibold">0.1%</p>
              </div>

              <div className="bg-[#161b22] rounded-lg p-4">
                <p className="text-sm text-gray-400">Price Change (24h)</p>
                <p className="text-green-400 font-semibold">$660.53</p>
              </div>
            </div>
          </div>

          {/* Right: BTC Converter */}
          <CurrencyConverter />
        </div>

        {/* Chart + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 bg-[#161b22] rounded-xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Trend Overview</h3>

              <div className="flex gap-2 text-xs">
                {["1D", "1W", "1M", "3M", "6M", "1Y", "Max"].map((item) => (
                  <span
                    key={item}
                    className={`px-2 py-1 rounded ${
                      item === "1D"
                        ? "bg-green-500 text-black"
                        : "bg-[#0f1419] text-gray-400"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="h-[300px] bg-[#0f1419] rounded-lg flex items-center justify-center text-gray-500">
              Chart goes here
            </div>
          </div>

          {/* Coin Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Coin Details</h3>

            <div className="grid grid-cols-2 gap-4">
              <DetailCard title="Market Cap" value="$1.74T" />
              <DetailCard title="Market Cap Rank" value="#1" />
              <DetailCard title="Total Volume" value="$24.5B" />
              <DetailCard title="Website" value="Website ↗" />
              <DetailCard title="Explorer" value="Explorer ↗" />
              <DetailCard title="Community" value="Community ↗" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coin;

const DetailCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="bg-[#161b22] rounded-lg p-4">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="font-semibold text-green-400">{value}</p>
    </div>
  );
};
