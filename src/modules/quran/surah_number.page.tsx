import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import SurahNavigation from './components/semantic/surah.nav';
import SurahHeadSection from './components/semantic/surah-head.section';
import AyahSurahSection from './components/semantic/ayah-surah.section';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <main className="">
      <SurahNavigation params={params} />
      <div className="bg_card">
        <div className={cn(mainContainerClass, 'px-0 py-8')}>
          <SurahHeadSection params={params} />
          <AyahSurahSection params={params} />
        </div>
      </div>
    </main>
  );
};

export default Page;
