
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
}: DropDownProps) {
  const [value, setValue] = useState(list[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="uppercase text-sm text-gray-400 px-2"
        >
          {value}
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-[#1a2027] border-none rounded-lg"
      >
        {list.map((item) => (
          <DropdownMenuItem
            key={item}
            onClick={() => setValue(item)}
            className="uppercasetext-whitecursor-pointerfocus:bg-[#0f1419]hover:bg-[#0f1419]"
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
