import React from 'react';
import { cn, JSXComponent } from 'packages/utils/cn';
export { Childs } from './utils.hoc';

const ContainerHOC = (baseClassName: string) => {
  const HOC = (Content: JSXComponent) => {
    const Component = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={cn(``, baseClassName, className)} {...props}>
        <Content />
      </div>
    );
    return Component;
  };
  return HOC;
};

const main = 'container max-w-5xl 2xl:max-w-4xl';
const HeaderMain = ContainerHOC(`flex justify-between items-center px-4 py-4 md:py-6 ${main}`);
const FooterMain = ContainerHOC(`flex justify-between items-center px-4 py-12 ${main}`);
const ContentMain = ContainerHOC(`min-h-dvh px-4 py-8 ${main}`);

export { ContainerHOC, ContentMain, HeaderMain, FooterMain };
