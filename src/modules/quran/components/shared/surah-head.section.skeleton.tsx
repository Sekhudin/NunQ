import { Skeleton, SkeletonText } from 'packages/ui/skeleton';

const SurahHeadSectionSkeleton = () => (
  <div className="flex flex-col items-center py-12">
    <SkeletonText className="text-3xl px-6 text-transparent" size={'h2'} />

    <span className="flex flex-col gap-y-1 pt-4 pb-12">
      <SkeletonText rounded={'sm'} size={'xl'} />
      <SkeletonText rounded={'sm'} size={'sm'} />
    </span>

    <Skeleton className="w-64 h-12 rounded-md" />
  </div>
);

export default SurahHeadSectionSkeleton;
