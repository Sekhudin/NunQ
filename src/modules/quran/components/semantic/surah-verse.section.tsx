'use client';
import { toast } from 'sonner';
import { Separator } from 'packages/ui/separator';
import { cn, Props, WithParams } from 'packages/utils/cn';
import useLocationHash from 'packages/hooks/use-location-hash';
import useQuranSettingsStore from 'stores/quran-settings.store';
import VerseContent from 'modules/quran/components/content/verse.content';
import service from 'modules/quran/service/quran.service';

const SurahVerseSection = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const surah = service.init(Number(params.surah_number));
  const verses = surah.verses();

  const settings = useQuranSettingsStore((state) => state);
  const location = useLocationHash((_, value) => {
    if (value === '') return;
    if (Number(value) < 1 || Number(value) > surah.numberOfVerse) {
      toast.warning('Not Found', {
        description: `Surat ${surah.nameID} hanya terdiri dari ${surah.numberOfVerse} ayat.`,
      });
    }
  });

  return (
    <div>
      {verses.map((verse, key) => (
        <section
          className={cn(
            `relative`,
            location.hashValue === String(verse) ? 'bg-primary/10' : '',
            className
          )}
          key={key}>
          <div className="absolute w-2 h-[15vh] -top-[15vh] right-0" id={`${verse}`} />
          <VerseContent
            className="px-6 py-16"
            verse={verse}
            value={surah.getVerse(verse)}
            settings={settings}
          />
          <Separator />
        </section>
      ))}
    </div>
  );
};

export default SurahVerseSection;
