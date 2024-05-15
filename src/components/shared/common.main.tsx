import { mainContainerClass } from 'components/HOCs/container.hoc';
import { cn, Props, WithChildren } from 'packages/utils/cn';

const CommonMain = ({ className, children }: Props<WithChildren>) => {
  return <main className={cn(``, mainContainerClass, className)}>{children}</main>;
};

export default CommonMain;
