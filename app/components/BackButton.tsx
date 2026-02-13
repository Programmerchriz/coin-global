
'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';

type BackButtonProps = {
  fallbackHref?: string;
};

export default function BackButton({ fallbackHref = '/' }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }}
      className="flex items-center hover:cursor-pointer px-2 pr-4 py-2 rounded-lg bg-[#84cc16] text-[#0f172a] font-semibold"
    >
      <ChevronLeft /> <span>Back</span>
    </button>
  );
};
