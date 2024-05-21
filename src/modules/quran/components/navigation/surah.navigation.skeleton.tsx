import { Skeleton } from 'packages/ui/skeleton';
import { containerClass } from 'components/HOCs/container.hoc';
import { cn } from 'packages/utils/cn';

const SurahNavigationSkeleton = () => (
  <div
    className={cn(
      `flex justify-between items-center pt-7 pb-5 md:pt-8 md:pb-7 rounded-none`,
      containerClass
    )}>
    <Skeleton className="w-6 md:w-16 h-6 rounded-lg" />

    <div className="flex gap-x-2">
      <Skeleton className="w-28 h-8 rounded-l-full rounded-r-none" />
      <Skeleton className="w-28 h-8 rounded-l-none rounded-r-full" />
    </div>

    <Skeleton className="w-6 md:w-24 h-6 rounded-lg" />
  </div>
);

export default SurahNavigationSkeleton;
