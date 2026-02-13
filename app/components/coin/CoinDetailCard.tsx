
"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const CoinDetailCard = ({
  coinDetailsArray,
}: CoinDetailCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {coinDetailsArray.map((detail) => detail.isLink ? (
        <Link
          key={detail.title}
          href={`${detail.href}`}
          target="_blank"
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
        <p className={`text-sm font-medium ${isLink ? "text-green-400" : "text-white"}`}>{value}</p>
        {isLink && (<ArrowUpRight width={20} className="text-green-400" />)}
      </div>
    </div>
  );
};

export default CoinDetailCard;
