'use client';
import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import { ROUTE } from 'configs/links.config';

const InternalServerError = ({ className }: Props) => {
  React.useEffect(() => {}, []);

  return (
    <div className={cn(`w-full h-96 flex items-center justify-center mt-32`, className)}>
      <div className="flex flex-col items-center justify-center gap-y-3">
        <span className="flex items-center gap-x-4 text-6xl font-bold text-pink-600/50">
          <span>5</span>
          <ShieldAlert className="w-20 h-20 stroke-pink-600/50" />
          <span>0</span>
        </span>
        <h3 className="text-xl">Terjadi Kesalahan</h3>
        <NextLinkButton href={ROUTE.Home}>Kembali</NextLinkButton>
      </div>
    </div>
  );
};

export default InternalServerError;
