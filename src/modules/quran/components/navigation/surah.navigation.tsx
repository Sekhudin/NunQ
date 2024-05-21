import { ArrowLeft, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import { DynamicIconButton, IconButton } from 'components/HOCs/icon.hoc';
import { containerClass } from 'components/HOCs/container.hoc';
import type { SurahList } from 'packages/quran-pack/quran.types';
import { Separator } from 'packages/ui/separator';
import { NextLinkButton } from 'packages/ui/next-link';
import { Button } from 'packages/ui/button';
import { cn, Props, WithParams } from 'packages/utils/cn';
import SearchVerseDialog from 'modules/quran/components/dialog/search-verse.dialog';
import SettingsPopover from 'modules/quran/components/popover/settings.popover';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';

const ArrowLeftIcon = DynamicIconButton(ArrowLeft, 'hoverPrimary');
const SettingsIcon = DynamicIconButton(Settings, 'hoverPrimary');
const ChevronRightIcon = IconButton(ChevronRight, 'primary');
const ChevronLeftIcon = IconButton(ChevronLeft, 'primary');
const SurahNavigation = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const value = service.findSurahByNumber(Number(params.surah_number));
  if (!value) return <>Not Found</>;
  
  return (
    <nav className={cn(`bg_navigation sticky top-0 min-h-3 z-10`, className)}>
      <Separator />
      <ul
        className={cn(
          containerClass,
          `flex justify-between items-center pt-7 pb-5 md:pt-8 md:pb-7`
        )}>
        <li>
          <NextLinkButton
            className="items-center gap-x-2 group"
            variant="plain"
            size="none"
            href={'/quran'}>
            <ArrowLeftIcon className="size-6" />
            <span className="hidden md:block">Daftar Surah</span>
          </NextLinkButton>
        </li>

        <li className="flex flex-raw items-center">
          <ul className="grid grid-cols-2 gap-x-2">
            {service.prevNextSurah(value.number).map((surah, key) => {
              if (!surah) {
                return (
                  <li key={key}>
                    <NextLinkButton
                      className={cn(
                        `flex justify-between items-center gap-x-2 group rounded-none`,
                        key === 0 ? 'flex-row-reverse rounded-l-full' : 'rounded-r-full',
                        `pointer-events-none`
                      )}
                      href={'#'}
                      variant={'outline'}
                      size={'auto'}
                      disabled>
                      <span>-</span>
                      {key === 0 ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </NextLinkButton>
                  </li>
                );
              }

              return (
                <li key={key}>
                  <NextLinkButton
                    className={cn(
                      `bg-background size-full flex justify-between items-center gap-x-2 group rounded-none`,
                      key === 0 ? 'flex-row-reverse rounded-l-full' : 'rounded-r-full'
                    )}
                    href={helper.hrefSurah(surah.number)}
                    variant={'outline'}
                    size={'auto'}>
                    <span>{surah.name_id}</span>
                    {key === 0 ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </NextLinkButton>
                </li>
              );
            })}
          </ul>
          <SearchVerseDialog className="ml-2" maxVerse={value.number_of_verse} />
        </li>

        <li>
          <SettingsPopover side="bottom" align="end">
            <Button className="flex items-center gap-x-2 group" variant="plain" size="none">
              <SettingsIcon className="size-6" />
              <span className="hidden md:block">Pengaturan</span>
            </Button>
          </SettingsPopover>
        </li>
      </ul>
      <Separator />
    </nav>
  );
};

export default SurahNavigation;
