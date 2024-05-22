import { SkeletonParagraph } from 'packages/ui/skeleton';

const SpecialSurahSkeleton = () => (
  <SkeletonParagraph
    className={`flex flex-row justify-center items-center
    gap-x-2 sm:gap-x-4 lg:gap-x-6 2xl:gap-x-8 gap-y-2 mb-8 py-1`}
    childClassName="w-24 px-2 sm:px-4 py-1 rounded-full"
    lastClassName="w-16"
    size={'sm'}
    rounded={'xl'}
    n={3}
    diffLast
  />
);

export default SpecialSurahSkeleton;
