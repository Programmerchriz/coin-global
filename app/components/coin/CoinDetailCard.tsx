
"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CoinDetailCard = () => {
  const coinDetailsArray: coinDetailsArrayProps[] = [
      {
        title: 'Market Cap',
        isLink: false,
        value: '$1.74T',
      },
      {
        title: 'Market Cap Rank',
        isLink: false,
        value: '#1',
      },
      {
        title: 'Total Volume',
        isLink: false,
        value: '$24.5B',
      },
      {
        title: 'Website',
        isLink: true,
        href: "",
      },
      {
        title: 'Explorer',
        isLink: true,
        href: "",
      },
      {
        title: 'Community',
        isLink: true,
        href: "",
      },
    ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {coinDetailsArray.map((detail) => detail.isLink ? (
        <Link
          key={detail.title}
          href={`${detail.href}`}
        >
          <DetailCard
            title={detail.title}
            value={detail.title}
            isLink={true}
          />
        </Link>
      ) : (
        <DetailCard
          key={detail.title}
          title={detail.title}
          value={detail.value}
          isLink={false}
        />
      ))}
    </div>
  )
};

const DetailCard = ({ title, value, isLink }: DetailCardProps) => {
  return (
    <div className="bg-[#161b22] rounded-lg p-4">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <div className="flex gap-1">
        <p className={`font-semibold ${isLink ? "text-green-400" : "text-white"}`}>{value}</p>
        {isLink && (<ArrowUpRight width={20} className="text-green-400" />)}
      </div>
    </div>
  );
};

export default CoinDetailCard;
