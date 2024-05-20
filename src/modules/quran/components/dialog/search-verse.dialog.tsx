'use client';
import React from 'react';
import { Search } from 'lucide-react';
import { IconButton } from 'components/HOCs/icon.hoc';
import { Input } from 'packages/ui/input';
import { Button } from 'packages/ui/button';
import { Dialog, DialogTrigger, DialogContent } from 'packages/ui/dialog';
import { cn, Props } from 'packages/utils/cn';
import useMounted from 'packages/hooks/use-mounted';
import useLocationHashState from 'packages/hooks/use-location-hash-state';

const SearchIcon = IconButton(Search, 'primary');
const SearchVerseDialog = ({ className, maxVerse }: Props<{ maxVerse: number }>) => {
  const [verse, setVerse] = useLocationHashState();

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useMounted(() => {
    const handler = () => {
      if (!triggerRef.current) return;
      if (window.scrollY > 90) {
        triggerRef.current.style.display = 'flex';
        return;
      }
      triggerRef.current.style.display = 'none';
      return;
    };

    handler();
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            `bg-background size-9 p-0.5 md:p-1 justify-center
            items-center rounded-full group hidden`,
            className
          )}
          ref={triggerRef}
          variant={'outline'}>
          <SearchIcon />
        </Button>
      </DialogTrigger>

      <DialogContent
        className={`max-w-[90dvw] sm:max-w-sm top-[5%] px-3 py-2`}
        closeClassName="right-3 top-[50%] -translate-y-[50%] p-0.5">
        <div className="flex items-center gap-x-3 pr-8">
          <Input
            className="h-fit px-2 rounded-lg"
            ref={inputRef}
            placeholder="Cari ayat"
            onChange={(ev) => {
              setVerse(ev.target.value);
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchVerseDialog;
