'use client';
import React from 'react';
import { SkeletonParagraph } from 'packages/ui/skeleton';
import { NextLinkButton } from 'packages/ui/next-link';
import { cn, Props } from 'packages/utils/cn';
import service from 'modules/quran/service/quran.service';
import helper from 'modules/quran/service/helper.service';
import useMediaQuery from 'packages/hooks/use-media-query';

const SpecialSurahList = ({ className }: Props) => {
  const isMd = useMediaQuery('(max-width: 768px)');

  const specialSurah = React.useMemo(() => {
    if (isMd) return service.specialSurahList.slice(0, 4);
    return service.specialSurahList;
  }, [isMd]);

  return (
    <ul
      className={cn(
        `flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 lg:gap-x-6
        2xl:gap-x-8 gap-y-2 mb-8`,
        className
      )}>
      {specialSurah.map((surah, key) => (
        <li key={key}>
          <NextLinkButton
            className={cn(`px-2 sm:px-4 py-1 rounded-full duration-500 delay-100`)}
            variant="secondary"
            href={helper.hrefSurah(surah.number)}>
            <span>{surah.name_id}</span>
          </NextLinkButton>
        </li>
      ))}
    </ul>
  );
};

export const SpecialSurahSkeleton = () => (
  <SkeletonParagraph
    className={`flex flex-row flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 lg:gap-x-6
    2xl:gap-x-8 gap-y-2 mb-8`}
    childClassName="w-16 px-2 sm:px-4 py-1 rounded-full"
    size={'sm'}
    rounded={'xl'}
    diffLast
    n={3}
  />
);

export default SpecialSurahList;
