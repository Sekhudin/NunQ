import { NextImage } from 'packages/ui/next-image';
import { cn, Props } from 'packages/utils/cn';
import type { SurahList } from 'packages/quran-pack/quran.types';
import { BismillahPNG } from 'packages/public/png';
import { arabicSpecial } from 'packages/font/arabic.font';
import service from 'modules/quran/service/quran.service';

const SurahHeadSection = ({ className, value }: Props<{ value: SurahList[number] }>) => {
  return (
    <section className={cn(`flex flex-col items-center py-12`, className)}>
      <span
        className={cn(
          `text-3xl text-zinc-600 dark:text-zinc-300 font-medium select-none
          tracking-[-0.08em]`
        )}
        style={{ ...arabicSpecial['surah name'].style }}>
        {service.withSurah(value.name)}
      </span>

      <span className="flex-col items-center justify-center text-center pt-4 pb-12">
        <span className="block text-xl font-bold">{value.name_id}</span>
        <span className="block text-sm font-light">
          {`${value.category} . ${value.number_of_verse}`}
        </span>
      </span>

      {service.isWithBismillah(value.number) ? (
        <NextImage
          className={`size-fit max-w-72 dark:invert opacity-70 dark:opacity-85 select-none
          pointer-events-none contrast-200`}
          src={BismillahPNG}
          alt="bismillah"
          quality={100}
          priority
          fill={false}
        />
      ) : null}
    </section>
  );
};

export default SurahHeadSection;
