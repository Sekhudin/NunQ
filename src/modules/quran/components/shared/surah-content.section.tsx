'use client';
import React from 'react';
import { useQueryState } from 'nuqs';
import { toast } from 'sonner';
import CommonLoader, { PageLoader } from 'components/shared/common.loader';
import { Separator } from 'packages/ui/separator';
import { cn, Props, WithParams } from 'packages/utils/cn';
import useIntersectionObserver from 'packages/hooks/use-intersection-observer';
import useMutationObserver from 'packages/hooks/use-mutation-observer';
import useQuranSettingsStore from 'stores/quran-settings.store';
import VerseContent from 'modules/quran/components/content/verse.content';
import service from 'modules/quran/service/quran.service';
import useUpdated from 'packages/hooks/use-updated';
import HeadSurahSection from './surah-head.section';
import HeadSurahSectionSkeleton from './surah-head.section.skeleton';

const VerseMemoContent = React.memo(VerseContent);
const SurahContentSection = ({ className, params }: Props<WithParams<'surah_number'>>) => {
  const [queryVerse, setQueryVerse] = useQueryState('ayat');
  const [slices, setSlices] = React.useState<number>(20);
  const refEntry = React.useRef<HTMLDivElement>(null);
  const mutationRef = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(refEntry);

  const settingsStore = useQuranSettingsStore((state) => state);
  const [surah, verses] = React.useMemo(() => {
    const _surah = service.init(Number(params.surah_number));
    const _verses = _surah.verses();
    return [_surah, _verses];
  }, [params.surah_number]);
  const verseNumbers = React.useMemo(() => verses.slice(0, slices), [slices, verses]);

  useUpdated(() => {
    // new slice when intersecting
    if (entry && entry.isIntersecting) {
      if (slices < surah.numberOfVerse) {
        setSlices(slices + 20);
        return;
      }
    }
  }, [entry]);

  useUpdated(() => {
    if (!queryVerse) return;

    if (!Number(queryVerse)) {
      toast.error('Invalid', {
        description: `Ayat tidak valid`,
      });
      return;
    }

    if (Number(queryVerse) < 1 || Number(queryVerse) > surah.numberOfVerse) {
      toast.warning('Not Found', {
        description: `Surat ${surah.nameID} hanya terdiri dari ${surah.numberOfVerse} ayat.`,
      });
      return;
    }

    if (Number(queryVerse) > slices) {
      setSlices(Number(queryVerse));
    }

    if (mutationRef.current) {
      const verseElement = mutationRef.current.querySelector(`[id='${queryVerse}']`);
      if (verseElement) {
        verseElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [queryVerse]);

  useMutationObserver(mutationRef, (mutations, observer) => {
    mutations
      .filter((mutation) => mutation.type === 'childList')
      .forEach(({ addedNodes }) => {
        addedNodes.forEach((_node) => {
          const node = _node as Element;
          const verseElement = node.firstElementChild;
          if (node.nodeType === 1 && verseElement) {
            if (verseElement.id === `${queryVerse}`) {
              verseElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });

  return (
    <>
      <div ref={mutationRef}>
        <React.Suspense fallback={<HeadSurahSectionSkeleton />}>
          <HeadSurahSection value={surah.info()} />
        </React.Suspense>
        {verseNumbers.map((verse, key) => (
          <section
            className={cn(
              `relative`,
              queryVerse === String(verse) ? 'bg-primary/10' : '',
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

        {verseNumbers.length < surah.numberOfVerse && (
          <div className="relative flex justify-center">
            <CommonLoader className="absolute -top-10" ref={refEntry} />
          </div>
        )}
      </div>
    </>
  );
};

export default SurahContentSection;
