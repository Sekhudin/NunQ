import { NextLayoutProps } from 'types/global';
import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';

type ChildName = 'carousel' | 'navigation' | 'special_surah' | 'children';
const Page = ({ carousel, navigation, special_surah, children }: NextLayoutProps<ChildName>) => {
  return (
    <main>
      {carousel}
      {navigation}
      <div className={cn(mainContainerClass, `py-8`)}>
        {special_surah}
        {children}
      </div>
    </main>
  );
};

export default Page;
