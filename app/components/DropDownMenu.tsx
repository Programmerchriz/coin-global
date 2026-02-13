
'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export function DropDown({
  list,
  value,
  onChange,
}: DropDownProps) {
  const [curr, setCurr] = useState(list[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="uppercase text-sm text-gray-400 px-2"
        >
          {curr}
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-[#1a2027] border-none rounded-lg"
      >
        {list.map((item) => {
          const isActive = curr === item;

          return (
            <DropdownMenuItem
              key={item}
              onClick={() => {
                setCurr(item);
                onChange(item);
              }}
              className={`
                uppercase cursor-pointer
                ${isActive ? 'bg-[#0f1419] text-white' : 'text-gray-400'}
                hover:bg-[#0f1419]
              `}
            >
              {item.toUpperCase()}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
