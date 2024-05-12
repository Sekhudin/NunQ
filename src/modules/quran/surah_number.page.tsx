import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import SurahNavigation from './components/semantic/surah.nav';
import SurahHeadSection from './components/semantic/surah-head.section';
import SurahVerseSection from './components/semantic/surah-verse.section';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <main className="">
      <SurahNavigation params={params} />
      <div className="">
        <div className={cn(mainContainerClass, 'px-0 pt-8')}>
          <SurahHeadSection params={params} />
          <SurahVerseSection params={params} />
        </div>
      </div>
    </main>
  );
};

export default Page;
