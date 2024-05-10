import { cn, Props, WithParams } from 'packages/utils/cn';
import { amiri } from 'packages/font/arabic.font';
import service from 'modules/quran/service/quran.service';

const SurahHeadSection = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const surah = service.findSurahByNumber(Number(params.surah_number));

  if (!surah) return null;

  return (
    <section className={cn(`flex flex-col items-center py-12`, className)}>
      <span className={cn(`text-3xl tracking-tighter text-zinc-700 dark:text-zinc-300`, amiri.className)}>{surah.name}</span>

      <span className="flex-col items-center justify-center text-center">
        <span className="block text-xl font-bold">{surah.name_id}</span>
        <span className="block text-sm font-light">
          {`${surah.category} . ${surah.number_of_verse}`}
        </span>
      </span>

      {service.isWithBismillah(params.surah_number) ? (
        <span className={cn(`text-3xl py-10 text-zinc-700 dark:text-zinc-300`, amiri.className)}>
          {service.bismillah}
        </span>
      ) : null}
    </section>
  );
};

export default SurahHeadSection;
