import { notFound } from 'next/navigation';
import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import type { PageParams, NextLayoutProps } from 'types/global';
import SurahNavigation from 'modules/quran/components/navigation/surah.navigation';
import SurahHeadSection from 'modules/quran/components/shared/surah-head.section';
import service from 'modules/quran/service/quran.service';

const Layout = ({ children, params }: NextLayoutProps<null, PageParams<'surah_number'>>) => {
  const info = service.findSurahByNumber(Number(params.surah_number));
  if (!info) notFound();

  return (
    <main className="">
      <SurahNavigation value={info} />
      <div className="">
        <div className={`${mainContainerClass} px-0 pt-8`}>
          <SurahHeadSection value={info} />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
