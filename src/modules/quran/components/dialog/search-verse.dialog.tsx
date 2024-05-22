'use client';
import React from 'react';
import { useQueryState } from 'nuqs';
import { Search } from 'lucide-react';
import { IconButton } from 'components/HOCs/icon.hoc';
import { Input } from 'packages/ui/input';
import { Button } from 'packages/ui/button';
import { Dialog, DialogTrigger, DialogContent } from 'packages/ui/dialog';
import { cn, Props } from 'packages/utils/cn';
import useScrollListener, { MAX_SCROLL } from 'packages/hooks/use-scroll-listener';

const SearchIcon = IconButton(Search, 'primary');
const SearchVerseDialog = ({ className, maxVerse }: Props<{ maxVerse: number }>) => {
  const [queryVerse, setQueryVerse] = useQueryState('ayat');

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useScrollListener(({ scrollY }) => {
    if (!triggerRef.current) return;
    if (scrollY > MAX_SCROLL.Y) {
      triggerRef.current.style.display = 'flex';
      return;
    }
    triggerRef.current.style.display = 'none';
    return;
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
              setQueryVerse(ev.target.value);
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
