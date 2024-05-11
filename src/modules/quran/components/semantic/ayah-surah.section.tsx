import { Separator } from 'packages/ui/separator';
import { cn, Props, WithParams } from 'packages/utils/cn';
import VerseContent from 'modules/quran/components/content/verse.content';
import service from 'modules/quran/service/quran.service';

const AyahSurahSection = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const surah = service.init(Number(params.surah_number));
  const verses = surah.verses();

  return (
    <div>
      {verses.map((verse, key) => (
        <section className={cn(``, className)} id={`${verse}`} key={key}>
          <VerseContent className="px-4 py-8" value={surah.getVerse(verse)} />
          <Separator />
        </section>
      ))}
    </div>
  );
};

export default AyahSurahSection;
