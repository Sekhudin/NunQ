'use client';
import React from 'react';
import { Search } from 'lucide-react';
import { RoundedIconMD } from 'components/hoc/icon.hoc';
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandItem,
} from 'packages/ui/command';
import { Dialog, DialogContent } from 'packages/ui/dialog';
import { Button } from 'packages/ui/button';
import useMounted from 'packages/hooks/use-mounted';
import { cn, Props } from 'packages/utils/cn';

const SearchIcon = RoundedIconMD(Search);
const SearchCommand = ({ className }: Props) => {
  const [open, setOpen] = React.useState(false);

  const triggerHandler = () => {
    setOpen(!open);
  };

  useMounted(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  return (
    <>
      <Button
        className={cn(`rounded-full`, className)}
        variant="outline-icon"
        size="icon-sm"
        aria-label="toggle dark-theme"
        onClick={triggerHandler}>
        <SearchIcon />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={cn(
            `top-[10%] lg:top-[15%] translate-y-0 max-w-[90dvw] lg:max-w-5xl 2xl:max-w-4xl bg-transparent p-0 md:p-0`
          )}>
          <Command label="My Command">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList hidden={false}>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup className='' heading="Suggestions">
                <CommandItem className="hover:bg-pink-400 static">Calendar</CommandItem>
                <CommandItem>
                  Search Emoji
                </CommandItem>
                <CommandItem>Launch</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchCommand;
