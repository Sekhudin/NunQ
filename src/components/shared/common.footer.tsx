import { containerClass, MainFooter } from 'components/HOCs/container.hoc';
import * as config from 'configs/env.config';
import { cn, Props } from 'packages/utils/cn';

const Content = () => {
  const date = new Date();
  const year = '@' + date.getFullYear();

  return (
    <>
      <div className="invisible">Common Footer</div>
      <div className="flex items-center gap-x-1 text-xs md:text-sm">
        <span>{year}</span>
        <span className="font-semibold">{config.APP_NAME}</span>
        <span>All rights reserved</span>
      </div>
    </>
  );
};

const FooterContent = MainFooter(Content);
const CommonFooter = ({ className }: Props) => (
  <footer className={cn(``, className)}>
    <FooterContent />
  </footer>
);

export default CommonFooter;
