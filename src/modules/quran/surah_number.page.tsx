import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';
import Navigation from './components/navigation/quran_surah.navigation';
import type { PageParams } from 'types/global';

const Page = ({ params }: PageParams<'surah_number'>) => {
  return (
    <main>
      <Navigation params={params} />
      <div className={cn(mainContainerClass)}>conttent</div>
    </main>
  );
};

export default Page;
