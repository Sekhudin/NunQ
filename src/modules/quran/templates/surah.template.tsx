import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { mainContainerClass } from 'components/HOCs/container.hoc';
import type { NextLayoutProps, WithParams } from 'types/global';
import SurahNavigation from 'modules/quran/components/navigation/surah.navigation';
import SurahNavigationSkeleton from 'modules/quran/components/navigation/surah.navigation.skeleton';
import { cn } from 'packages/utils/cn';

type ChildName = 'head' | 'children';
const Layout = ({
  children,
  params,
}: NextLayoutProps<ChildName> & WithParams<'surah_number'>) => {
  if (!Number(params.surah_number)) notFound();
  if (Number(params.surah_number) < 1) notFound();
  if (Number(params.surah_number) > 114) notFound();

  return (
    <main className="">
      <Suspense fallback={<SurahNavigationSkeleton />}>
        <SurahNavigation params={params} />
      </Suspense>
      <div className="">
        <div className={cn(mainContainerClass, `px-0 pt-8`)}>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
