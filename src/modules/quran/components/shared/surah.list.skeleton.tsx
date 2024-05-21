import { Skeleton } from 'packages/ui/skeleton';

const SurahListSkeleton = () => (
  <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`}>
    {Array.from({ length: 15 }).map((_, key) => (
      <Skeleton className="h-24 rounded-xl" key={key} />
    ))}
  </div>
);

export default SurahListSkeleton;
