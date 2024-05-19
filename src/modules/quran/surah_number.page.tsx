import { notFound } from 'next/navigation';
import FloatContainer from 'components/shared/float.container';
import ScrollTopButton from 'components/shared/scroll-top.button';
import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import type { PageParams } from 'types/global';
import SurahNavigation from './components/semantic/surah.nav';
import SurahHeadSection from './components/semantic/surah-head.section';
import SurahVerseSection from './components/semantic/surah-verse.section';
import service from './service/quran.service';

const Page = ({ params }: PageParams<'surah_number'>) => {
  const info = service.findSurahByNumber(Number(params.surah_number));
  if (!info) notFound();

  return (
    <main className="">
      <SurahNavigation value={info} />
      <div className="">
        <div className={cn(mainContainerClass, 'px-0 pt-8')}>
          <SurahHeadSection value={info} />
          <SurahVerseSection params={params} />
        </div>
      </div>
      <FloatContainer>
        <ScrollTopButton />
      </FloatContainer>
    </main>
  );
};

export default Page;
