import { containerClass, mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import Navigation from './components/navigation/quran_surah.navigation';
import { NextLinkButton } from 'packages/ui/next-link';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <>
      <Navigation surahNumber={1} />
      <div className={cn(mainContainerClass)}>conttent</div>
    </>
  );
};

export default Page;
