'use client';
import React from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Separator } from 'packages/ui/separator';
import { cn, Props, WithParams } from 'packages/utils/cn';
import useLocationHash from 'packages/hooks/use-location-hash';
import useIntersectionObserver from 'packages/hooks/use-intersection-observer';
import useQuranSettingsStore from 'stores/quran-settings.store';
import VerseContent from 'modules/quran/components/content/verse.content';
import service from 'modules/quran/service/quran.service';
import useUpdated from 'packages/hooks/use-updated';

const VerseMemoContent = React.memo(VerseContent);
const Page = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const [slices, setSlices] = React.useState<number>(20);
  const router = useRouter();
  const refList = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(refList);

  const settingsStore = useQuranSettingsStore((state) => state);
  const [surah, verses] = React.useMemo(() => {
    const _surah = service.init(Number(params.surah_number));
    const _verses = _surah.verses();
    return [_surah, _verses];
  }, [params.surah_number]);

  const location = useLocationHash((_, value) => {
    if (value === '') return;

    if (!Number(value)) {
      toast.error('Invalid', {
        description: `Ayat tidak valid`,
      });
      return;
    }

    if (Number(value) < 1 || Number(value) > surah.numberOfVerse) {
      toast.warning('Not Found', {
        description: `Surat ${surah.nameID} hanya terdiri dari ${surah.numberOfVerse} ayat.`,
      });
      return;
    }
  });

  useUpdated(() => {
    if (entry && entry.isIntersecting && slices < surah.numberOfVerse) {
      setSlices(slices + 20);
    }

    if (Number(location.hashValue) && slices < surah.numberOfVerse) {
      setSlices(Number(location.hashValue));
    }
  }, [entry]);

  useUpdated(() => {}, []);

  return (
    <>
      {verses.slice(0, slices).map((verse, key) => (
        <section
          className={cn(
            `relative`,
            location.hashValue === String(verse) ? 'bg-primary/10' : '',
            className
          )}
          key={key}>
          <div className="absolute w-2 h-[15vh] -top-[15vh] right-0" id={`${verse}`} />
          <VerseMemoContent
            className="px-6 py-16"
            verse={verse}
            value={surah.getVerse(verse)}
            settings={settingsStore}
          />
          <Separator />
        </section>
      ))}

      {slices < surah.numberOfVerse && <div ref={refList}>show</div>}
    </>
  );
};

export default Page;
