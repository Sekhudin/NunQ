import { containerClass } from 'components/HOCs/container.hoc';
import { Skeleton, SkeletonText } from 'packages/ui/skeleton';
import { cn } from 'packages/utils/cn';

const QuranNavigationSkeleton = () => (
  <div className={cn(containerClass, `flex justify-around pt-3 pb-2`)}>
    {Array.from({ length: 4 }).map((_, key) => (
      <div className="flex flex-col items-center gap-y-2" key={key}>
        <Skeleton className="size-12 rounded-full" />
        <SkeletonText className="w-16" rounded={'lg'} size={'sm'} />
      </div>
    ))}
  </div>
);

export default QuranNavigationSkeleton;
