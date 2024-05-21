import { Skeleton } from 'packages/ui/skeleton';
import { containerClass } from 'components/HOCs/container.hoc';

const QuranicCarouselSkeleton = () => (
  <div className={`pt-6 md:pt-8 ${containerClass}`}>
    <Skeleton className="h-44 w-full rounded-xl" />
  </div>
);

export default QuranicCarouselSkeleton;
