import { Separator } from 'packages/ui/separator';
import HeadSurahSectionSkeleton from './surah-head.section.skeleton';
import SurahVerseSectionSkeleton from 'modules/quran/components/content/verse.content.skeleton';

const SurahContentSectionSkeleton = () => (
  <div>
    <HeadSurahSectionSkeleton />
    <div>
      {Array.from({ length: 2 }).map((_, key) => (
        <div className="relative" key={key}>
          <SurahVerseSectionSkeleton className="px-6 py-16" />
          <Separator />
        </div>
      ))}
    </div>
  </div>
);

export default SurahContentSectionSkeleton;
