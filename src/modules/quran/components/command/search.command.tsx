'use client';
import { useRouter } from 'next/navigation';
import { Search, AtSign, File, FileHeart } from 'lucide-react';
import { DynamicIconMD, IconXS, IconSM } from 'components/HOCs/icon.hoc';
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from 'packages/ui/command';
import { NextLink } from 'packages/ui/next-link';
import { RatingOffIcon, RatingOnIcon, RemoveIcon } from 'packages/ui/icons';
import { Dialog, DialogContent } from 'packages/ui/dialog';
import { Separator } from 'packages/ui/separator';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import useMounted from 'packages/hooks/use-mounted';
import useQuranSearchesStore from 'stores/quran-searches.store';
import useSearchCommandStore from './search.command.store';
import helper from 'modules/quran/service/helper.service';

const SearchIcon = DynamicIconMD(Search);
const FileIcon = IconXS(File);
const FileHeartIcon = IconXS(FileHeart);
const AtSignIcon = IconSM(AtSign);

const SearchCommand = ({ className }: Props) => {
  const router = useRouter();
  const state = useSearchCommandStore((state) => state);
  const action = useSearchCommandStore((action) => action);

  const searchesState = useQuranSearchesStore((state) => state);
  const searchesAction = useQuranSearchesStore((action) => action);

  useMounted(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === '/' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        action.setOpen(!state.open);
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  return (
    <>
      <Button
        className={cn(`rounded-full group`, className)}
        variant="ghost2"
        size="icon"
        aria-label="toggle dark-theme"
        onClick={action.triggerCommandOnClick}>
        <SearchIcon />
      </Button>

      <Dialog open={state.open} onOpenChange={action.setOpen} modal>
        <DialogContent
          className={cn(
            `top-[2dvh] lg:top-[8dvh] translate-y-0 max-w-[95dvw] lg:max-w-5xl
            2xl:max-w-4xl bg-transparent p-0 md:p-0`
          )}
          closeClassName="top-2 right-2">
          <Command label="My Command">
            <CommandInput
              placeholder="Pencarian..."
              value={state.search}
              onValueChange={action.setSearch}
            />
            <CommandList>
              <CommandEmpty>Tidak ada hasil</CommandEmpty>
              {searchesState.recents.length > 0 && (
                <CommandGroup heading="Terkini">
                  {searchesState.recents.map((recent, key) => (
                    <div className="relative flex" key={key}>
                      <CommandItem
                        className="w-full"
                        value={recent.href}
                        keywords={recent.keywords}
                        onSelect={action.commandItemOnSelect((href) => {
                          router.push(href);
                        })}>
                        <FileIcon />
                        <span>{recent.name}</span>
                      </CommandItem>
                      <span className="absolute top-[50%] right-2 translate-y-[-50%] flex items-center gap-x-2">
                        <RatingOffIcon
                          className="cursor-pointer"
                          onClick={searchesAction.addRecentsToFavorites(recent)}
                        />
                        <RemoveIcon onClick={searchesAction.removeFromRecents(key)} />
                      </span>
                    </div>
                  ))}
                </CommandGroup>
              )}

              {searchesState.favorites.length > 0 && (
                <CommandGroup heading="Favorit">
                  {searchesState.favorites.map((favorite, key) => (
                    <div className="relative flex" key={key}>
                      <CommandItem
                        className="w-full"
                        value={favorite.href}
                        keywords={favorite.keywords}
                        onSelect={action.commandItemOnSelect((href) => {
                          router.push(href);
                        })}>
                        <FileHeartIcon />
                        <span>{favorite.name}</span>
                      </CommandItem>
                      <span className="absolute top-[50%] right-2 translate-y-[-50%] flex items-center gap-x-2">
                        <RatingOnIcon />
                        <RemoveIcon onClick={searchesAction.removeFromFavorites(key)} />
                      </span>
                    </div>
                  ))}
                </CommandGroup>
              )}

              {(searchesState.favorites.length > 0 ||
                searchesState.recents.length > 0 ||
                state.surahMode) && <Separator />}

              {state.links.length > 0 && (
                <CommandGroup heading="Tautan">
                  {state.links.map((link, key) => (
                    <NextLink key={key} href={link.href}>
                      <CommandItem
                        key={key}
                        value={link.href}
                        keywords={link.keywords}
                        onSelect={action.commandItemOnSelect((href) => {
                          router.push(href);
                        })}>
                        <FileIcon />
                        <span>{link.name}</span>
                      </CommandItem>
                    </NextLink>
                  ))}
                </CommandGroup>
              )}

              {state.surahList.length > 0 && state.surahMode && (
                <CommandGroup heading="Surah">
                  {state.surahList.map((surah, key) => (
                    <NextLink key={key} href={helper.hrefSurah(surah.number)}>
                      <CommandItem
                        key={key}
                        value={helper.hrefSurah(surah.number)}
                        keywords={[`@${surah.name_id}`]}
                        onSelect={searchesAction.addSurahToRecents(
                          surah,
                          action.commandItemOnSelect(router.push)
                        )}>
                        <FileIcon />
                        <span>{surah.name_id}</span>
                      </CommandItem>
                    </NextLink>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
            <CommandSeparator />
            <div className="flex items-center space-x-2 px-3 py-2 text-xs font-light font-mono bg-accent/20">
              <div>Ketik</div>
              <div className="flex items-center space-x-2">
                <AtSignIcon className="border border-border p-0.5 rounded-md" />
                <p>untuk cari surah</p>
              </div>
            </div>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchCommand;
