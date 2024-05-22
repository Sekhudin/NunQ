import { Skeleton, SkeletonText, SkeletonParagraph } from 'packages/ui/skeleton';
import { cn, Props } from 'packages/utils/cn';

const VerseContentSkeleton = ({ className }: Props) => (
  <div className={cn('flex gap-x-4 md:gap-x-6', className)}>
    <Skeleton className="h-6 w-2 absolute top-5" />
    <div className="flex-grow">
      <div className="flex justify-end">
        <SkeletonText className="w-2/5 py-1" size={'h1'} />
      </div>

      <SkeletonParagraph
        className="w-3/4 flex-col-reverse gap-y-2 mt-6"
        lastClassName="w-[70%]"
        n={1}
        diffLast
      />
    </div>
  </div>
);

export default VerseContentSkeleton;
