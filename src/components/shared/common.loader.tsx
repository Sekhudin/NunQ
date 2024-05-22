import React from 'react';
import { LoaderCircle } from 'lucide-react';
import { cn, Props } from 'packages/utils/cn';

const CommonLoader = React.forwardRef<HTMLDivElement, Props>(({ className }, ref) => {
  return (
    <div className={cn(``, className)} ref={ref}>
      <LoaderCircle className="stroke-primary animate-spin" />
    </div>
  );
});
CommonLoader.displayName = 'CommonLoader';

export const PageLoader = ({ className, loading }: Props<{ loading: boolean }>) => {
  return (
    <>
      {loading && (
        <div
          className={cn(
            `fixed inset-0 flex justify-center items-center cursor-not-allowed select-none`,
            className
          )}>
          <LoaderCircle className="stroke-primary animate-spin" />
        </div>
      )}
    </>
  );
};

export default CommonLoader;
