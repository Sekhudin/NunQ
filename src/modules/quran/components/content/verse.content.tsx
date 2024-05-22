'use client';
import React from 'react';
import { MoreVertical } from 'lucide-react';
import { DynamicIconSM } from 'components/HOCs/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import type { SurahVerse } from 'packages/quran-pack/quran.types';
import type { QuranSettings } from 'types/store';
import VerseOptionsPopover from 'modules/quran/components/popover/verse-options.popover';
import helper from 'modules/quran/service/helper.service';

const MoreVerticalIcon = DynamicIconSM(MoreVertical);
const VerseNumber = ({ className, verse, size }: Props<{ verse: number; size: number }>) => (
  <div
    className={cn('relative mx-3', className)}
    style={{ width: `${size + 6}px`, height: `${size + 6}px` }}>
    <span
      className={`absolute inset-0 bg-primary/10 dark:bg-foreground/10
      border border-primary dark:border-foreground rounded-full`}
    />
    <span
      className={`absolute top-[50%] right-[50%] -translate-y-[50%] translate-x-1/2
      leading-none text-primary dark:text-primary-foreground`}
      style={{ fontSize: `${size - 14}px` }}>
      {helper.convertToArabicNumber(verse)}
    </span>
  </div>
);

const VerseContent = ({
  className,
  verse,
  value,
  settings,
}: Props<{ verse: number; value: SurahVerse; settings: QuranSettings.State }>) => {
  const versePerWords = React.useMemo(() => value.arabic.split(' '), [value.arabic]);
  const isLastIndex = React.useCallback(
    (index: number) => index === versePerWords.length - 1,
    [versePerWords.length]
  );

  return (
    <div className={cn(`flex gap-x-4 md:gap-x-6`, className)}>
      <div>
        <VerseOptionsPopover side="bottom" align="start" value={value}>
          <Button className="absolute top-5 p-1.5 rounded-full group" variant="ghost" size="none">
            <MoreVerticalIcon />
          </Button>
        </VerseOptionsPopover>
      </div>

      <div className="flex-grow">
        <ul
          className={cn(
            `flex flex-wrap flex-row-reverse justify-start items-center gap-x-1 gap-y-8
            font-bold`
          )}
          style={{
            fontSize: `${settings.arabicFont.size}px`,
            ...settings.arabicFont.family.style,
          }}>
          {versePerWords.map((arabic, key) => {
            if (!isLastIndex(key)) {
              return (
                <li className="" key={key}>
                  {arabic}
                </li>
              );
            }

            return (
              <li className="flex" key={key}>
                <VerseNumber verse={verse} size={settings.arabicFont.size} />
                {arabic}
              </li>
            );
          })}
        </ul>

        {(settings.showLatin || settings.showTranslation) && (
          <div className="flex flex-col gap-y-2 mt-8">
            {settings.showLatin && (
              <span className="block text-primary dark:text-foreground font-semibold">
                {value.latin}
              </span>
            )}

            {settings.showTranslation && (
              <span className="block dark:font-extralight">{value.translation.id}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerseContent;
