'use client';
import React from 'react';
import CommonLoader from 'components/shared/common.loader';
import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props, PropsFrom } from 'packages/utils/cn';
import { SurahList as SurahNames } from 'quran-pack/types';
import { arabicSpecial } from 'packages/font/arabic.font';
import useIntersectionObserver from 'packages/hooks/use-intersection-observer';
import useUpdated from 'packages/hooks/use-updated';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';

const Item = ({
  className,
  href,
  value,
  ...props
}: PropsFrom<typeof NextLinkButton> & { value: SurahNames[number] }) => (
  <>
    <NextLinkButton
      className={cn(`bg_card size-full border border-transparent dark:sm:border-border
      hover:border-primary dark:hover:border-primary hover:text-zinc-800 dark:hover:text-zinc-200
      text-wrap text-base py-6 rounded-xl duration-500 delay-100 group`)}
      variant={'ghost'}
      size={'auto'}
      href={href}
      {...props}>
      <span className={`grow flex items-center gap-x-4`}>
        {value.number}
        <span className="grow flex flex-col">
          {value.name_id}
          <span className="grow text-xs font-light">
            {`${value.name_trans_id} . ${value.number_of_verse}`}
          </span>
        </span>
      </span>

      <span
        className={cn(`grow-0 text-xl`)}
        style={{
          ...arabicSpecial['surah name'].style,
        }}>
        {value.name}
      </span>
    </NextLinkButton>
  </>
);

const SurahListItem = React.memo(Item);
const SurahList = ({ className }: Props) => {
  const [slices, setSlices] = React.useState(20);
  const refEntry = React.useRef<HTMLDivElement>(null);
  const refList = React.useRef<HTMLUListElement>(null);
  const entry = useIntersectionObserver(refEntry);

  const surahList = React.useMemo(() => service.surahList.slice(0, slices), [slices]);

  useUpdated(() => {
    if (entry && entry.isIntersecting) {
      if (slices < service.sumOfSurah) {
        setSlices(slices + 20);
        return;
      }
    }
  }, [entry]);

  return (
    <>
      <ul
        className={cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`, className)}
        ref={refList}>
        {surahList.map((surah, key) => (
          <li key={key}>
            <SurahListItem className={``} value={surah} href={helper.hrefSurah(surah.number)} />
          </li>
        ))}
      </ul>

      {surahList.length < service.sumOfSurah && (
        <div className="relative flex justify-center pt-4">
          <CommonLoader className="" ref={refEntry} />
        </div>
      )}
    </>
  );
};

export default SurahList;
