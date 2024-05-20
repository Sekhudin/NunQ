import { NextLayoutProps } from 'types/global';
import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import QuranNavigation from 'modules/quran/components/navigation/quran.navigation';

type ChildName = 'carousel' | 'special_surah' | 'surah_list';
const Layout = ({ carousel, special_surah, children }: NextLayoutProps<ChildName>) => {
  return (
    <main>
      {carousel}
      <QuranNavigation />
      <div className={`${mainContainerClass} py-8`}>
        {special_surah}
        {children}
      </div>
    </main>
  );
};

export default Layout;
