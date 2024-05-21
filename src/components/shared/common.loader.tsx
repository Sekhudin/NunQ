import { LoaderCircle } from 'lucide-react';
import { cn, Props } from 'packages/utils/cn';

const CommonLoader = ({ className }: Props) => {
  return (
    <div className={cn(``, className)}>
      <LoaderCircle className="stroke-primary animate-spin" />
    </div>
  );
};

export default CommonLoader;
