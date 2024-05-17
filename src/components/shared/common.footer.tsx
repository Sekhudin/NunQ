import { Separator } from 'packages/ui/separator';
import { MainFooter } from 'components/HOCs/container.hoc';
import { PUBLIC_APP } from 'configs/env.config';
import { cn, Props } from 'packages/utils/cn';

const Content = () => {
  const date = new Date();
  const year = '@' + date.getFullYear();

  return (
    <>
      <div className="invisible">Common Footer</div>
      <div className="flex items-center gap-x-1 text-xs md:text-sm">
        <span>{year}</span>
        <span className="font-semibold">{PUBLIC_APP.name}</span>
        <Separator className='min-h-4 mx-2' orientation='vertical' />
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
