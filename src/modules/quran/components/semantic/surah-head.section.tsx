import { NextImage } from 'packages/ui/next-image';
import { cn, Props, WithParams } from 'packages/utils/cn';
import { BismillahPNG } from 'packages/public/png';
import { notoNastaliqUrdu } from 'packages/font/arabic.font';
import service from 'modules/quran/service/quran.service';

const SurahHeadSection = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const surah = service.findSurahByNumber(Number(params.surah_number));

  if (!surah) return null;

  return (
    <section className={cn(`flex flex-col items-center py-12`, className)}>
      <span
        className={cn(
          `text-3xl text-zinc-600 dark:text-zinc-300 font-medium select-none
          tracking-[-0.08em]`
        )}
        style={{ ...notoNastaliqUrdu.style }}>
        {service.withSurah(surah.name)}
      </span>

      <span className="flex-col items-center justify-center text-center pt-4 pb-12">
        <span className="block text-xl font-bold">{surah.name_id}</span>
        <span className="block text-sm font-light">
          {`${surah.category} . ${surah.number_of_verse}`}
        </span>
      </span>

      {service.isWithBismillah(params.surah_number) ? (
        <NextImage
          className={`size-fit dark:invert opacity-70 dark:opacity-85 select-none
          pointer-events-none`}
          src={BismillahPNG}
          alt="bismillah"
          priority
          fill={false}
        />
      ) : null}
    </section>
  );
};

export default SurahHeadSection;
