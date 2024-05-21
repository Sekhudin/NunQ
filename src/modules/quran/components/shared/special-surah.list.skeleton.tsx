import { SkeletonParagraph } from 'packages/ui/skeleton';

const SpecialSurahSkeleton = () => (
  <SkeletonParagraph
    className={`flex flex-row flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 lg:gap-x-6
    2xl:gap-x-8 gap-y-2 mb-8`}
    childClassName="w-16 px-2 sm:px-4 py-1 rounded-full"
    size={'sm'}
    rounded={'xl'}
    diffLast
    n={3}
  />
);

export default SpecialSurahSkeleton;
